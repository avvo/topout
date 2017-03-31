import React from 'react'
import { Link } from 'react-router-dom'
import io  from 'socket.io-client';

class Dashboard extends React.Component{
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    var socket = io('http://localhost:4096');
    socket.on('db', (payload) => {
      console.log(payload)
    });
  }

  render() {
    return(
      <div className="row">
        <div className="col-xs-6">
          <h1 className="u-margin-bottom-0 u-margin-top-0">Welcome {this.context.data.user.userName}</h1>
        </div>
        <div className="col-xs-6 text-right">
          <Link to="/leaderboard">View Leaderboard</Link>
        </div>
      </div>
    )
  }
}


Dashboard.contextTypes = {
  data: React.PropTypes.object,
}

export {Dashboard}
