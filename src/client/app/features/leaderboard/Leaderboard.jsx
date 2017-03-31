import React from 'react'
import io  from 'socket.io-client';

class Leaderboard extends React.Component{
  constructor(props, context) {
    super(props, context)
    this.state = {leaderboard: this.context.data.leaderboard}
  }

  componentDidMount() {
    var socket = io('http://localhost:4096');
    socket.on('db', (payload) => {
      this.setState({leaderboard: payload.leaderboard})
    });
  }

  render() {
    return (
      <div className="text-center">
        <h1>Leaderboard</h1>
        <table className="table table-responsive-cards">
          <thead>
          <th>User</th>
          <th>Score</th>
          </thead>
          <tbody>
          {this.state.leaderboard.map(record => {
            return (<tr>
              <td>{record.display_name && record.display_name || '?'}</td>
              <td>{record.score}</td>
            </tr>)
          })}
          </tbody>
        </table>
      </div>
    )
  }
}


Leaderboard.contextTypes = {
  data: React.PropTypes.object,
}

export {Leaderboard}
