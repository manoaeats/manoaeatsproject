import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class UserHomePage extends React.Component {
  render() {
    return (
        <div className="manoaeats-UserHomePage-background">
          <Grid container centered >
            <Header as='h2'>Aloha!</Header>
          </Grid>
        </div>
    );
  }
}

export default UserHomePage;
