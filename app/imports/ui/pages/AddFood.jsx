import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Foods } from '../../api/food/Food';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  title: String,
  location: String,
  image: String,
  price: Number,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddFood extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { title, image, price, location } = data;
    const owner = Meteor.user().username;
    Foods.collection.insert({ title, location, image, price, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Food added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid id='addfood-page' container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" inverted>Add Food</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField id='add-food-form-title' name='title'/>
                <TextField id='add-food-form-image' name='image'/>
                <TextField id='add-food-form-location' name='location'/>
                <TextField id='add-food-form-price' name='price'/>
                <SubmitField id='add-food-form-submit' value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddFood;
