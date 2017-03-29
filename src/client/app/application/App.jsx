import React from 'react'
import {Header} from '../features/layout/components/Header';
import {Footer} from '../features/layout/components/Footer';

export default (props) => {
  console.log(props)
  return (
    <div className="off-canvas-wrapper sticky-footer-container">
      <Header />
      <div className="sticky-footer-expander">
        <div className="container u-vertical-padding-1">
          <h1>Topout</h1>
          <h3>{props.user && props.user.userName || <a href="/auth/github">login with github</a>}</h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}
