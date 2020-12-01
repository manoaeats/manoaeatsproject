import { Meteor } from 'meteor/meteor';
import { Vendors } from '../../api/vendor/Vendor.js';
import { Menus } from '../../api/menu/Menu.js';
import { Foods } from '../../api/food/Food.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(` Adding: ${data.name} (${data.owner})`);
  Vendors.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Vendors.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** Initialize the database with a default data document. */
function addMenu(data) {
  console.log(` Adding: ${data.menuItemName} (${data.owner})`);
  Menus.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Menus.collection.find().count() === 0) {
  if (Meteor.settings.defaultMenu) {
    console.log('Creating default data.');
    Meteor.settings.defaultMenu.map(data => addMenu(data));
  }
}

/** Initialize the database with a default data document. */
function addFood(data) {
  console.log(` Adding: ${data.title} (${data.price})`);
  Foods.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Foods.collection.find().count() === 0) {
  if (Meteor.settings.defaultFood) {
    console.log('Creating default data.');
    Meteor.settings.defaultFood.map(data => addFood(data));
  }
}
