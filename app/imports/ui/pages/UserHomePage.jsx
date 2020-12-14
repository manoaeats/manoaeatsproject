import React from 'react';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Grid, Header, Segment, Card, Loader } from 'semantic-ui-react';
import SimpleSchema from 'simpl-schema';
import { _ } from 'meteor/underscore';
import { AutoForm, SubmitField } from 'uniforms-semantic';
import { Vendors } from '../../api/vendor/Vendor';
import VendorItem from '../components/VendorItem';
import MultiSelectField from '../forms/controllers/MultiSelectField';

/** Create a schema to specify the structure of the data to appear in the form. */
const makeSchema = (allCuisines) => new SimpleSchema({
  cuisine: { type: Array, label: 'Cuisines', optional: true },
  'cuisine.$': { type: String, allowedValues: allCuisines },
});

/** function getData(cuisines) {
  const data = UserInfo.collection.findOne({ email });
  const cuisine = (Vendors.collection.fetch(), 'cuisine');
  return
} */

/** Renders the Vendors Collection as a Card */
class UserHomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cuisines: [] };
  }

  submit(data) {
    this.setState({ cuisines: data.cuisine || [] });
  }

  /** A simple static component to render some text for the landing page. */

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const allCuisines = _.pluck(Vendors.collection.find().fetch(), 'cuisine');
    console.log(allCuisines);
    const formSchema = makeSchema(allCuisines);
    const bridge = new SimpleSchema2Bridge(formSchema);
    /** const userData = _.uniq(emails).map(email => getData(email)); */
    const vendors = Vendors.collection.find({ cuisine: { $in: this.state.cuisines } }).fetch();
    return (

        <div id="userhome-page" className="manoaeats-UserHomePage-background">
          <Grid className="userhome" container centered stackable columns={1}>
            <Grid.Column textAlign='center'>
              <div className={'user-home'}>Aloha!</div>
              <Search className={'search-bar'}></Search>
            </Grid.Column>
          </Grid>

          <Grid container centered stackable columns={3}>
            <Grid.Column textAlign='center'>
              <Header as='h1' >All Vendors</Header>
              <Header as='h4' inverted>Users can view all the list of vendors that we have at UH Manoa.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Header as='h1' >Todays Top Picks</Header>
              <Header as='h4' inverted>Users can view the list of most popular foods.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Header as='h1' >Foods Available</Header>
              <Header as='h4' inverted>Users can view the list of available foods and their locations.</Header>
            </Grid.Column>
          </Grid>
=======
        <div>
          <div id="userhome-page" className="manoaeats-UserHomePage-background">
            <Grid container centered stackable columns={1}>
              <Grid.Column textAlign='center'>
                <div className={'user-home'}>Aloha!</div>
              </Grid.Column></Grid>
            <div className={'three-paragraphs'}>
              <Grid container centered stackable columns={3}>
                <Grid.Column textAlign='center'>
                  <Header as='h2'>All Vendors</Header>
                  <Header as='h4' >Users can view all the list of vendors that we have at UH Manoa.</Header>
                </Grid.Column>

                <Grid.Column textAlign='center'>
                  <Header as='h2'>Todays Top Picks</Header>
                  <Header as='h4'>Users can view the list of most popular foods.</Header>
                </Grid.Column>

                <Grid.Column textAlign='center'>
                  <Header as='h2'>Foods Available</Header>
                  <Header as='h4'>Users can view the list of available foods and their locations.</Header>
                </Grid.Column>
              </Grid>
            </div>
            <Grid container centered stackable columns={1}>
              <Grid.Column textAlign='center'>
                <div id="filter-page" className="filterFunction">
                  <AutoForm schema={bridge} onSubmit={data => this.submit(data)}>
                    <Segment>
                      <MultiSelectField id='cuisine' name='cuisine' showInlineError={true}
                                        placeholder={'Search a Cuisine'}/>
                      <SubmitField id='submit' value='Submit'/>
                    </Segment>
                  </AutoForm>
                  <Card.Group style={{ paddingTop: '10px' }}>
                    {_.map(vendors, (vendor, index) => <VendorItem key={index} vendor={vendor}/>)}
                  </Card.Group>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </div>

    );
  }
}

UserHomePage.propTypes = {
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // const sub1 = Meteor.subscribe("UserInfo");
  const sub2 = Meteor.subscribe(Vendors.allPublicationName);
  return {
    ready: sub2.ready(),
  };
})(UserHomePage);
