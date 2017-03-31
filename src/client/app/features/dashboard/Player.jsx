import React from 'react'
import { Link } from 'react-router-dom'
import {ZingChart} from '../common/components/ZingChart'
import {config} from './lib/dashboard-chart-config'
import axios from 'axios'

class Player extends React.Component{
  constructor(props, context) {
    super(props, context)
    const checked = this.context.data.scores || false;
    this.state = {checked: checked, scoresOverTime: this.context.data.scores || []}
  }

  componentDidMount() {
    if (!this.context.data.scores && !this.state.checked ) {
      axios.get(`/dashboard/api/${this.props.match.params.userId}`)
        .then(response => {
          return this.setState({scoresOverTime: response.data.scores, checked: true})
        })
    }
  }

  render() {
    return(
      <div>
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


Player.contextTypes = {
  data: React.PropTypes.object,
}

export {Player}
