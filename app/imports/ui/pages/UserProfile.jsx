import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { UserInfo } from '../../api/userinfo/UserInfo';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class UserProfile
    extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container id='userprofile-page'>
          <Header as="h2" textAlign="center" inverted>My Profile</Header>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
UserProfile
    .propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(UserInfo.userPublicationName);
  return {
    users: UserInfo.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(UserProfile);
