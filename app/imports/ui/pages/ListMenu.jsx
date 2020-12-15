import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Table, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Menus } from '../../api/menu/Menu';
import { Vendors } from '../../api/vendor/Vendor';
// import VendorItemAdmin from '../components/VendorItemAdmin';
import MenuItemList from '../components/MenuItemList';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListMenu extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const fontStyle = {
      fontFamily: ['Antics', 'serif'],
    };

    return (
        <Container>
          <Header style={fontStyle} as="h2" textAlign="center" inverted>Menu</Header>
          <Table celled style={fontStyle}>
            <Table.Header><Table.Row>
              <Table.HeaderCell>Menu</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Calories</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Images</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
            <Table.Body>
              <MenuItemList></MenuItemList>
              { /* {this.props.menus.map((menu, index) => <MenuItemList
                  key={index}
                  menu={this.props.filter(Vendors._id === Menus.menuVendorId)}/>)} */ }
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListMenu.propTypes = {
  menus: PropTypes.array.isRequired,
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  const _id = match.params._id;
  const subscription = Meteor.subscribe(Menus.allPublicationName);
  const subscription2 = Meteor.subscribe(Vendors.allPublicationName);
  return {
    vendors: Vendors.collection.find(_id).fetch(),
    menus: Menus.collection.find({ menuVendorId: _id }).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ListMenu);
