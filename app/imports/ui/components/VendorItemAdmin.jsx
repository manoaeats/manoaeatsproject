import React from 'react';
import { Image, Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class VendorItemAdmin extends React.Component {

  removeItem(docID) {
    // eslint-disable-next-line no-console
    console.log(`item to delete is: ${docID}`);
    this.props.Vendors.collection.remove(docID);
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.vendor.name}</Table.Cell>
          <Table.Cell>{this.props.vendor.cuisine}</Table.Cell>
          <Table.Cell>{this.props.vendor.location}</Table.Cell>
          <Table.Cell><Image src={this.props.vendor.image} size='tiny' /></Table.Cell>
          <Table.Cell>{this.props.vendor.price}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.vendor._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell>
            <Button icon onClick={() => this.removeItem(this.props.vendor._id)}><Icon name='trash'/>
            </Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
VendorItemAdmin.propTypes = {
  vendor: PropTypes.object.isRequired,
  Vendors: PropTypes.object.isRequired,
};

export default withRouter(VendorItemAdmin);
