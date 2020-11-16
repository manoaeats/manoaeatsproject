import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
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
        <div className="vendor-list"><Container>
          <Header as="h2" textAlign="center" inverted>Vendors (Admin)</Header>
          <Card.Group>
            {this.props.vendors.map((vendor) => <VendorItemAdmin key={vendor._id} vendor={vendor}/>)}
          </Card.Group>
        </Container></div>
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
