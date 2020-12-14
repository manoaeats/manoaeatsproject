import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px' };
    return (
      <Menu style={menuStyle} attached="top" borderless inverted className="navigatorbar">
        <Menu.Item as={NavLink} activeClassName="active" exact to="/home">
          <Header inverted as='h1'>Manoa Eats</Header>
        </Menu.Item>
        {this.props.currentUser ? (
            [<Menu.Item id="navbar-all-vendors" as={NavLink} activeClassName="active" exact to="/all" key='all'>All Vendors</Menu.Item>,
            <Menu.Item id="navbar-today-top-pick" as={NavLink} activeClassName="active" exact to="/pick" key='pick'>Today&apos;s Top Pick</Menu.Item>,
              <Menu.Item id="navbar-foods-available-rightnow" as={NavLink} activeClassName="active" exact to="/food" key='pick'>Foods Available</Menu.Item>,
              <Menu.Item id="navbar-my-vendor" as={NavLink} activeClassName="active" exact to="/list" key='list'>My Vendor</Menu.Item>]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            [<Menu.Item id="navbar-admin" as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>,
            <Menu.Item id="navbar-admin-add-vendor" as={NavLink} activeClassName="active" exact to="/addAdmin" key='addAdmin'>Add Vendor</Menu.Item>,
              <Menu.Item id="navbar-admin-add-food" as={NavLink} activeClassName="active" exact to="/addAdmin" key='addAdmin'>Add Food</Menu.Item>]
          ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
            <Menu.Item id="navbar-add-vendor" as={NavLink} activeClassName="active" exact to="/add" key='add'>Add Vendor</Menu.Item>,
            <Menu.Item id="navbar-add-food" as={NavLink} activeClassName="active" exact to="/add" key='add'>Add Food</Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
