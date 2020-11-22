import React from 'react';
import { Grid, Search } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class UserHomePage extends React.Component {
  render() {
    return (
        <div className="manoaeats-UserHomePage-background">
          <Grid container centered stackable columns={1}>
            <Grid.Column textAlign='center'>
              <div className={'user-home'}>Aloha!</div>
              <Search className={'search-bar'}></Search>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default UserHomePage;
