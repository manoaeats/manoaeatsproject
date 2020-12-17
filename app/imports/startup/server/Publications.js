import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Vendors } from '../../api/vendor/Vendor';
import { Menus } from '../../api/menu/Menu';
import { Foods } from '../../api/food/Food';
import { UserInfo } from '../../api/userinfo/UserInfo';
import { Comments } from '../../api/comment/Comment';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise publish nothing.
Meteor.publish(Vendors.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Vendors.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Menus.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Menus.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Vendors.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Vendors.collection.find();
  }
  return this.ready();
});

Meteor.publish(Menus.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Menus.collection.find();
  }
  return this.ready();
});

Meteor.publish(Vendors.allPublicationName, function () {
  if (this.userId) {
    return Vendors.collection.find();
  }
  return this.ready();
});

Meteor.publish(Menus.allPublicationName, function () {
  if (this.userId) {
    return Menus.collection.find();
  }
  return this.ready();
});

Meteor.publish(Vendors.vendorPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    if (this.userId && Roles.userIsInRole(this.userId, 'vendor')) {
      return Vendors.collection.find({ owner: username });
    }
    return this.ready();
  }
  return this.ready();
});

Meteor.publish(Menus.vendorPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    if (this.userId && Roles.userIsInRole(this.userId, 'vendor')) {
      return Menus.collection.find({ owner: username });
    }
    return this.ready();
  }
  return this.ready();
});

Meteor.publish(Foods.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Foods.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Foods.allPublicationName, function () {
  if (this.userId) {
    return Foods.collection.find();
  }
  return this.ready();
});

  Meteor.publish('UserInfo', function () {
    if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
      return UserInfo.find();
    }
    return this.ready();
  });

Meteor.publish(Foods.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Foods.collection.find();
  }
  return this.ready();
});

Meteor.publish(Comments.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Comments.collection.find();
  }
  return this.ready();
});

Meteor.publish(Comments.allPublicationName, function () {
  if (this.userId) {
    return Comments.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
  Meteor.publish(null, function () {
    if (this.userId) {
      return Meteor.roleAssignment.find({ 'user._id': this.userId });
    }
    return this.ready();
  });
