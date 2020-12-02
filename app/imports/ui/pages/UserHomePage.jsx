import React from 'react';
import { Grid, Header, Search } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class UserHomePage extends React.Component {
  render() {
    return (
        <div id="userhome-page" className="manoaeats-UserHomePage-background">
          <Grid container centered stackable columns={1}>
            <Grid.Column textAlign='center'>
              <div className={'user-home'}>Aloha!</div>
              <Search className={'search-bar'}></Search>
            </Grid.Column>
          </Grid>

          <Grid container centered stackable columns={3}>
            <Grid.Column textAlign='center'>
              <Header as='h1' >All Vendors</Header>
              <Header as='h4' inverted>Users can view all the list of vendors that we have at UH Manoa.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Header as='h1' >Todays Top Picks</Header>
              <Header as='h4' inverted>Users can view the list of most popular foods.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Header as='h1' >Foods Available</Header>
              <Header as='h4' inverted>Users can view the list of available foods and their locations.</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default UserHomePage;
