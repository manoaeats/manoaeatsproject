import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class UserHomePage extends React.Component {
  render() {
    return (
        <div className="manoaeats-UserHomePage-background">
          <Grid container centered stackable columns={2}>
            <Grid.Column textAlign='center'>
              <Header as='h2' inverted>Aloha!</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default UserHomePage;
