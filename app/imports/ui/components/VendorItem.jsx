import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
// import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorItem extends React.Component {
  render() {
    return (

    <Card centered>
      <Image src={this.props.vendor.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{this.props.vendor.name}</Card.Header>
        <Card.Header>{this.props.vendor.price}</Card.Header>
        <Card.Meta>
          <span className='date'>{this.props.vendor.cuisine}</span>
        </Card.Meta>
        <Card.Description>
          Location: {this.props.vendor.location}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Feed>
          <Link to={`/edit/${this.props.vendor._id}`}>Edit</Link>
        </Feed>
      </Card.Content>
    </Card>
    );
  }
}

/** Require a document to be passed to this component. */
VendorItem.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorItem);
