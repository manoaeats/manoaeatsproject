import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Table, Container, Header, Loader, Grid, Icon } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendor/Vendor';
import VendorItemAdmin from '../components/VendorItemAdmin';
import { UserInfo } from '../../api/userinfo/UserInfo';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendorAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const fontStyle = {
      fontFamily: ['Antics', 'serif'],
    };

    return (
        <Container>
          <Header style={fontStyle} as="h2" textAlign="center" inverted>Admin</Header>
          <Grid container centered stackable columns={2}>
            <Grid.Column textAlign='center'>
              <Icon size="huge" name="edit" inverted/>
              <Header style={fontStyle} as='h2' inverted>Remove & Edit</Header>
              <Header style={fontStyle} as='h4' inverted>Permitted Admin Users are able to edit or delete specific vendors that are no longer available</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size="huge" name="list ul" inverted/>
              <Header style={fontStyle} as='h2' inverted>List of users</Header>
              <Header style={fontStyle} as='h4' inverted>Admin users can also view a list of all registered users on the application</Header>
            </Grid.Column>
          </Grid>
          <Table celled style={fontStyle}>
            <Table.Header><Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Cuisine</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Images</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>

            </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.vendors.map((vendor) => <VendorItemAdmin key={vendor._id} vendor={vendor}
                                                                   Vendors={Vendors}/>)}
            </Table.Body>
          </Table>
          <Table celled style={fontStyle}>
            <Table.Header><Table.Row>
              <Table.HeaderCell>User</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>

            </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.userinfo.map((listuser) => <Table.Row>
                <Table.Cell>{listuser.user}</Table.Cell>
                <Table.Cell>{listuser.firstName}</Table.Cell>
                <Table.Cell>{listuser.lastName}</Table.Cell>
              </Table.Row> )}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListVendorAdmin.propTypes = {
  vendors: PropTypes.array.isRequired,
  userinfo: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vendors.adminPublicationName);
  const subscription2 = Meteor.subscribe("UserInfo");

  return {
    userinfo: UserInfo.find({}).fetch(),
    vendors: Vendors.collection.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ListVendorAdmin);
