import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Encapsulates state and variable values for this collection. */
class MenusCollection {
  constructor() {
    // The name of this collection.
    this.name = 'MenusCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      menuVendorName: String,
      menuItemName: String,
      menuItemPrice: Number,
      menuItemCalories: Number,
      menuItemImage: String,
      menuVendorId: String,
      menuDescription: String,
      owner: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
    this.vendorPublicationName = `${this.name}.publication.vendor`;
    this.allPublicationName = `${this.name}.publication.temp`;
  }
}

export const Menus = new MenusCollection();
