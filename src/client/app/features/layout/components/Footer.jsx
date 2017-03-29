import React, { Component, PropTypes } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <hr className="u-margin-bottom-0" />
        <div className="footer u-bg-lighter-gray">
          <div className="container text-center">
            <small>© Product by Avvo Inc. All Rights Reserved 2017</small>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
};

export {Footer}
