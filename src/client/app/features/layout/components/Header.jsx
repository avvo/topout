import React, { Component, PropTypes } from 'react';
import { Icon } from '../../common/components/Icon'

const Header = (props, context) => {
  console.log(context.data)
    return (
      <header className="header" role="banner">
        <div className="container">

          <div className="header-group">
            <a href="/" className="header-brand">
              Topout
            </a>
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
