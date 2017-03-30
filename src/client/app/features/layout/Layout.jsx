import React from 'react'
import {Header} from './components/Header';
import {Footer} from './components/Footer';


const Layout = (props) => {
  return (
    <div className="off-canvas-wrapper sticky-footer-container">
      <Header />
      <div className="sticky-footer-expander">
        <div className="container u-vertical-padding-1">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export {Layout}
