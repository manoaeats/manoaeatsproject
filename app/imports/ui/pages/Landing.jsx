import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div id='landing-page' className="manoaeats-landing-background">
          <Grid container centered stackable columns={2}>
            <Grid.Column textAlign='center'>
              <Icon size="huge" name="users" inverted/>
              <Header as='h1' inverted>Users</Header>
              <Header as='h4' inverted>You can search and have a faster way of locating the food that you wanted. You will be able to see the daily top picks and foods available.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size="huge" name="users" inverted/>
              <Header as='h1' inverted>Vendors</Header>
              <Header as='h4' inverted>Add your business for the users to see your location, hours of operation, and menu.</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
