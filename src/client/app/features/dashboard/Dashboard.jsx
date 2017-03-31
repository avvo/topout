import React from 'react'
import { Link } from 'react-router-dom'
import {ZingChart} from '../common/components/ZingChart'
import {config} from './lib/dashboard-chart-config'
import axios from 'axios'

class Dashboard extends React.Component{
  constructor(props, context) {
    super(props, context)
    const checked = this.context.data.scores || false;
    this.state = {checked: checked, scoresOverTime: this.context.data.scores || []}
  }

  componentDidMount() {
    if (!this.context.data.scores && !this.state.checked ) {
      axios.get(`/dashboard/api`)
        .then(response => {
          return this.setState({scoresOverTime: response.data.scores, checked: true})
        })
    }
  }

  render() {
    console.log(this.state.scoresOverTime)
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
            {this.state.checked &&
            <ZingChart
              config={config(
                this.state.scoresOverTime,
                `Your Progress`,
                '#36A2EB'
              )}
              graphId="dashboard"
            />
            }
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
