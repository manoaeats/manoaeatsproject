import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
// import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorItem extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.vendor.name}</Table.Cell>
          <Table.Cell>{this.props.vendor.cuisine}</Table.Cell>
          <Table.Cell>{this.props.vendor.location}</Table.Cell>
          <Table.Cell> <Image size='tiny' src={this.props.vendor.image}/> </Table.Cell>
          <Table.Cell>{this.props.vendor.price}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.vendor._id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
VendorItem.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorItem);
