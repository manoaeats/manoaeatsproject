import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
// import { listAllVendorsPage } from './listallvendors.page';
// import { todayTopPickPage } from './toppick.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'gallego6@hawaii.edu', password: 'alohajerome' };

fixture('meteor-application-template-react localhost test with default db')
    .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that list all vendors page shows up', async (testController) => {
  // await listAllVendorsPage.isDisplayed(testController);
});

test('Test that today top picks page shows up', async (testController) => {
  // await todayTopPickPage.isDisplayed(testController);
});
