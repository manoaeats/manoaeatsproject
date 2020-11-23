import React from 'react';
import { Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '25px', color: 'white' };
    return (
          <footer>
            <div style={divStyle} className="ui center aligned container">
              <hr />
              <Icon name="facebook f"/>
              <Icon name="twitter"/>
              <Icon name="instagram"/><br/>
              Email: manoaeats@hawaii.edu <br/>
              Phone: (808) 123-4567<br/>
            </div>
          </footer>
    );
  }
}

export default Footer;
