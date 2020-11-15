import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="manoaeats-landing-background">
          <Grid container centered stackable columns={2}>
            <Grid.Column textAlign='center'>
              <Icon size="huge" name="users"/>
              <Header as='h1'>Users</Header>
              <Header as='h3'>You can search and have a faster way of locating the food that you wanted. You will be able to see the daily top picks and foods available.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size="huge" name="users"/>
              <Header as='h1'>Vendors</Header>
              <Header as='h3'>Add your business for the users to see your location, hours of operation, and menu.</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
