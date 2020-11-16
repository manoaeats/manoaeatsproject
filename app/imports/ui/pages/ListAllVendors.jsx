import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendor/Vendor';
import AllVendorItem from '../components/AllVendorItem';
import VendorItem from '../components/VendorItem';
// import { Comments } from '/imports/api/comment/Comment';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListAllVendors extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="vendor-list"><Container>
          <Header as="h2" textAlign="center" inverted>All Vendors</Header>
          <Card.Group>
            {this.props.vendors.map((vendor) => <AllVendorItem key={vendor._id} vendor={vendor}/>)}
          </Card.Group>
        </Container></div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListAllVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vendors.allPublicationName);
  // const subscription2 = Meteor.subscribe(Comments.allPublicationName);

  return {
    vendors: Vendors.collection.find({}).fetch(),
    ready: (subscription.ready())// && subscription2.ready()),
  };
})(ListAllVendors);
