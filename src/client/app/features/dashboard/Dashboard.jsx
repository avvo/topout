import React from 'react'
import { Link } from 'react-router-dom'
import io  from 'socket.io-client';
import {ZingChart} from '../common/components/ZingChart'
import {config} from './lib/dashboard-chart-config'


class Dashboard extends React.Component{
  constructor(props, context) {
    super(props, context)
    this.state = {scoresOverTime: this.context.data.scores || []}
  }

  componentDidMount() {
    const socket = io(this.context.data.socketUrl);
    socket.on('db', (payload) => {
      const matchedScore = payload.leaderboard.find(score => {return score.id == this.context.data.user.id})
      if (matchedScore) {
        this.setState({scoresOverTime: [].concat(this.state.scoresOverTime, matchedScore).slice(1)})
      }
    });
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-6">
            <h1 className="u-margin-bottom-0 u-margin-top-0">Welcome {this.context.data.user.userName}</h1>
          </div>
          <div className="col-xs-6 text-right">
            <Link to="/leaderboard">View Leaderboard</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ZingChart
              config={config(
                this.state.scoresOverTime,
                `Your Progress`,
                '#36A2EB'
              )}
              graphId="dashboard"
            />
          </div>
        </div>
      </div>

    )
  }
}


Dashboard.contextTypes = {
  data: React.PropTypes.object,
}

export {Dashboard}
