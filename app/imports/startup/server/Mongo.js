import { Meteor } from 'meteor/meteor';
import { Vendors } from '../../api/vendor/Vendor.js';
import { Menus } from '../../api/menu/Menu.js';

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
  console.log(` Adding: ${data.menuVendorName} (${data.owner})`);
  Menus.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Menus.collection.find().count() === 0) {
  if (Meteor.settings.defaultMenu) {
    console.log('Creating default data.');
    Meteor.settings.defaultMenu.map(data => addMenu(data));
  }
}
