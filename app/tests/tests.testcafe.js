import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { userHomePage } from './userhomepage.page';
import { listAllVendorsPage } from './listallvendors.page';
import { todayTopPickPage } from './todaytoppick.page';
import { listVendorAdminPage } from './listvendoradmin.page';
import { listVendorPage } from './listvendor.page';
import { addVendorPage } from './addvendor.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'gallego6@hawaii.edu', password: 'alohajerome', name: 'Panda Express',
                      cuisine: 'Chinese', location: 'Paradise Palms Café', image: '/images/pandaVendorImage.png', price: '$' };

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

test('Test that user home page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await userHomePage.isDisplayed(testController);
});

test('Test that list all vendors page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListAllVendorPage(testController);
  await listAllVendorsPage.isDisplayed(testController);
  await listAllVendorsPage.hasCard(testController);
});

test('Test that today top pick page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoTodayTopPickPage(testController);
  await todayTopPickPage.isDisplayed(testController);
  await todayTopPickPage.hasCard(testController);
});

test('Test that list vendor admin page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListVendorAdminPage(testController);
  await listVendorAdminPage.isDisplayed(testController);
  await listVendorAdminPage.hasCard(testController);
});

test('Test that list vendor page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListVendorPage(testController);
  await listVendorPage.isDisplayed(testController);
  await listVendorPage.hasCard(testController);
});

test('Test that add vendor page shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAddVendorPage(testController);
  await addVendorPage.isDisplayed(testController);
});
