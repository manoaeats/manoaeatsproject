import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '25px', color: 'white' };
    return (
          <footer>
            <div style={divStyle} className="ui center aligned container">
              <hr />
              Department of Information and Computer Science<br/>
              University of Hawaii at Manoa<br/>
              Honolulu, HI 96822<br/>
            </div>
          </footer>
    );
  }
}

export default Footer;
