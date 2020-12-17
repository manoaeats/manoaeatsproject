import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { UserInfo } from '../../api/userinfo/UserInfo';

const bridge = new SimpleSchema2Bridge(UserInfo.schema);

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class UserProfile
    extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { user, firstName, lastName, _id } = data;
    UserInfo.collection.update(_id, { $set: { user, firstName, lastName } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Item updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container id='userprofile-page'>
          <Header as="h2" textAlign="center" inverted>My Profile</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <TextField name='user'/>
              <TextField name='first name'/>
              <TextField name='last name'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
              <HiddenField name='owner' />
            </Segment>
          </AutoForm>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
UserProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(UserInfo.adminPublicationName);
  return {
    users: UserInfo.find({}).fetch(),
    ready: subscription.ready(),
  };
})(UserProfile);
