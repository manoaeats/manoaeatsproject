import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class UserItem extends React.Component {
  render() {
    return (
    <Card centered>
      <Card.Content>
        <Card.Header>{this.props.user.firstName}</Card.Header>
        <Card.Header>{this.props.user.lastName}</Card.Header>
        <Card.Header>{this.props.user.user}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <a>
        </a>
      </Card.Content>
    </Card>
    );
  }
}

/** Require a document to be passed to this component. */
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(UserItem);
