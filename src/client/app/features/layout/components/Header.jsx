import React, { Component, PropTypes } from 'react';
import { Icon } from '../../common/components/Icon'

class Header extends Component {
  render() {
    return (
      <header className="header" role="banner">
        <div className="container">
          <div className="header-group">
            <h1>Topout</h1>
          </div>
          <div className="header-group header-group-last">
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
};

export {Header}
