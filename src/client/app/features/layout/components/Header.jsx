import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'
import { Icon } from '../../common/components/Icon'

const Header = (props, context) => {
    return (
      <header className="header" role="banner">
        <div className="container">

          <div className="header-group">
            {context.data.user.userName &&
            <Link to="/dashboard" className="header-brand">Topout</Link>
              || <a href="/" className="header-brand">
                Topout
              </a>
            }
          </div>

          {context.data.user.userName &&
            <div className="header-group header-group-last">
              <ul className="header-links">
                <li>
                  <a href="#!">
                    <img src={context.data.user.img} height="25px"/>
                    &nbsp;
                    <span className="text-nowrap">
                      {context.data.user.userName}
                    </span>
                  </a>

                </li>
                <li>
                  <a href="/auth/logout">
                    <span className="text-nowrap">
                      Logout
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          }
        </div>
      </header>
    );
}

Header.contextTypes = {
  data: React.PropTypes.object,
};
export {Header}
