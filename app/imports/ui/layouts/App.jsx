import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListVendor from '../pages/ListVendor';
import ListVendorAdmin from '../pages/ListVendorAdmin';
import AddVendor from '../pages/AddVendor';
import EditVendor from '../pages/EditVendor';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import ListAllVendors from '../pages/ListAllVendors';
import UserHomePage from '../pages/UserHomePage';
import FoodsAvailable from '../pages/FoodsAvailable';
import ListMenu from '../pages/ListMenu';
import TodayTopPick from '../pages/TodayTopPick';
import AddFood from '../pages/AddFood';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <ProtectedRoute path="/home" component={UserHomePage}/>
              <ProtectedRoute path="/food" component={FoodsAvailable}/>
              <ProtectedRoute path="/list" component={ListVendor}/>
              <ProtectedRoute path="/add" component={AddVendor}/>
              <ProtectedRoute path="/addFood" component={AddFood}/>
              <ProtectedRoute path="/all" component={ListAllVendors}/>
              <ProtectedRoute path="/menu" component={ListMenu}/>
              <ProtectedRoute path="/pick" component={TodayTopPick}/>
              <ProtectedRoute path="/edit/:_id" component={EditVendor}/>
              <AdminProtectedRoute path="/admin" component={ListVendorAdmin}/>
              <AdminProtectedRoute path="/addAdmin" component={AddVendor}/>
              <AdminProtectedRoute path="/addFoodAdmin" component={AddFood}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
