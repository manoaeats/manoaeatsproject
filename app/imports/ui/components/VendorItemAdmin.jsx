import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class VendorItemAdmin extends React.Component {
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
            <a>
              <Link to={`/edit/${this.props.vendor._id}`}>Edit</Link>
            </a>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
VendorItemAdmin.propTypes = {
  vendor: PropTypes.object.isRequired,
};

export default withRouter(VendorItemAdmin);
