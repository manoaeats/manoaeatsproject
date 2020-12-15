import React from 'react';
import { Image, Card, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
// import AddComment from '/imports/ui/components/AddComment';
// import Comment from '/imports/ui/components/Comment';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class FoodItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Image src={this.props.food.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.food.title}</Card.Header>
            <Card.Header>$ {this.props.food.price}</Card.Header>
            <Card.Description>
              Location: {this.props.food.location}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit2/${this.props.food._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
  // comments: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(FoodItem);
