import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Menus } from '../../api/menu/Menu';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  menuVendorName: String,
  menuItemName: String,
  menuItemPrice: Number,
  menuItemCalories: Number,
  menuItemImage: String,
  menuVendorId: String,
  menuDescription: String,
  owner: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddVendor extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { menuVendorName, menuItemName, menuItemPrice, menuItemCalories, menuItemImage, menuDescription } = data;
    const menuVendorId = Meteor.menuVendorId().menuVendorId;
    Menus.collection.insert({ menuVendorName, menuItemName, menuItemPrice, menuItemCalories, menuItemImage, menuDescription, menuVendorId },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Menu added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid id='addmenu-page' container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" inverted>Add Menu</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField id='add-menu-form-name' name='menuItemName'/>
                <TextField id='add-menu-form-item' name='menuItemName'/>
                <TextField id='add-menu-form-price' name='menuItemPrice'/>
                <TextField id='add-menu-form-calories' name='menuItemCalories'/>
                <TextField id='add-menu-form-image' name='menuItemImage'/>
                <SelectField id='add-menu-form-description' name='menuDescription'/>
                <SubmitField id='add-menu-form-submit' value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddVendor;
