import React from 'react';
import { Image, Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class MenuItemList extends React.Component {

  removeItem(docID) {
    // eslint-disable-next-line no-console
    console.log(`item to delete is: ${docID}`);
    this.props.Menus.collection.remove(docID);
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.menu.menuItemName}</Table.Cell>
          <Table.Cell>$ {this.props.menu.menuItemPrice}</Table.Cell>
          <Table.Cell>{this.props.menu.menuItemCalories}</Table.Cell>
          <Table.Cell>{this.props.menu.menuDescription}</Table.Cell>
          <Table.Cell><Image src={this.props.menu.menuItemImage} size='tiny' /></Table.Cell>
          <Table.Cell>
            <Link to={`/editMenu/${this.props.menu._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell>
            <Button icon onClick={() => this.removeItem(this.props.menu._id)}><Icon name='trash'/>
            </Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
MenuItemList.propTypes = {
  menu: PropTypes.object.isRequired,
  vendor: PropTypes.object.isRequired,
  Menus: PropTypes.object.isRequired,
};

export default withRouter(MenuItemList);
