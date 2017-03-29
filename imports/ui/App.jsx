import React, { Component } from 'react';

import Task from './Task.jsx';
import {Header} from './Header.jsx';
import {Footer} from './Footer.jsx';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
    <div className="off-canvas-wrapper sticky-footer-container">
      <Header />
      <div className="sticky-footer-expander">
        <div className="container u-vertical-padding-1">
          <h1>Todo List</h1>
          <ul>
            {this.renderTasks()}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}
