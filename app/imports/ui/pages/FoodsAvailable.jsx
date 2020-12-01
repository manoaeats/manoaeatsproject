import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Search, Grid } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Foods } from '../../api/food/Food';
import FoodsItemList from '../components/FoodsItemList';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class FoodsAvailable extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Grid container centered stackable columns={1}>
            <Grid.Column textAlign='center'>
              <div className={'foods-available'}>Foods Available</div>
              <Search className={'search-bar1'}></Search>
            </Grid.Column>
          </Grid>
          <Card.Group>
            {this.props.foods.map((food) => <FoodsItemList key={food._id} food={food} />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
FoodsAvailable.propTypes = {
  foods: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Foods.allPublicationName);
  return {
    foods: Foods.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(FoodsAvailable);
