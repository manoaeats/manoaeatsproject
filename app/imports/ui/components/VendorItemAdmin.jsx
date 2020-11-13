import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class VendorItemAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.vendor.name}</Table.Cell>
          <Table.Cell>{this.props.vendor.cuisine}</Table.Cell>
          <Table.Cell>{this.props.vendor.location}</Table.Cell>
          <Table.Cell> <Image size='tiny' src={this.props.vendor.image}/> </Table.Cell>
          <Table.Cell>{this.props.vendor.price}</Table.Cell>
          <Table.Cell>{this.props.vendor.owner}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
VendorItemAdmin.propTypes = {
  vendor: PropTypes.object.isRequired,
};

export default VendorItemAdmin;
