import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Table, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendor/Vendor';
import VendorItemAdmin from '../components/VendorItemAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendorAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Admin</Header>
          <Table celled>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Cuisine</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Images</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>

            </Table.Row>
          <Table.Body>
            {this.props.vendors.map((vendor) => <VendorItemAdmin key={vendor._id} vendor={vendor} Vendors={Vendors}/>)}
          </Table.Body>
        </Table>
        </Container>
  );
  }
  }

  /** Require an array of Stuff documents in the props. */
  ListVendorAdmin.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  };

  /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
  export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vendors.adminPublicationName);
  return {
  vendors: Vendors.collection.find({}).fetch(),
  ready: subscription.ready(),
  };
  })(ListVendorAdmin);
