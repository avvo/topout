import React from 'react'
import {Header} from '../features/layout/components/Header';
import {Footer} from '../features/layout/components/Footer';

export default (props) => {
  return (
    <div className="off-canvas-wrapper sticky-footer-container">
      <Header />
      <div className="sticky-footer-expander">
        <div className="container u-vertical-padding-1">
          <h1>Todo List</h1>
          Content
        </div>
      </div>
      <Footer />
    </div>
  )
}
