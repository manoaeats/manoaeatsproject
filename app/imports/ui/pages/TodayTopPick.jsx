import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Vendors } from '../../api/vendor/Vendor';
import AllVendorItem from '../components/AllVendorItem';
import { Comments } from '../../api/comment/Comment';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class TodayTopPick extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container id='todaytoppick-page'>
          <Header as="h2" textAlign="center" inverted>Today Top Pick</Header>
          <Card.Group>
            {this.props.vendors.map((vendor) => <AllVendorItem key={vendor._id} vendor={vendor} comments={this.props.comments.filter(comment => (comment.vendorId === vendor._id))}/>)}
            </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
TodayTopPick.propTypes = {
  vendors: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vendors.allPublicationName);
  const subscription2 = Meteor.subscribe(Comments.allPublicationName);
  return {
    vendors: Vendors.collection.find({}).fetch(),
    comments: Comments.collection.find({}).fetch(),
    ready: (subscription.ready() && subscription2.ready()),
  };
})(TodayTopPick);
