import React from 'react'
import zingchart from 'zingchart'

const globalConfig = {
  globals: {
    fontFamily: 'Circular',
  },
  title: {
    fontWeight: 'normal',
    fontSize: '30px',
    padding: '5px, 0, 0, 0',
    adjustLayout: true,
  },
  subtitle: {
    fontWeight: 'normal',
    fontSize: '16px',
    padding: '10px, 0, 10px, 0',
    adjustLayout: true,
  },
  legend: {
    adjustLayout: true,
  },
  plotarea: {
    position: 'center middle',
    margin: '20%, 20%, 20%, 20%',
    adjustLayout: true,
  },
}

const mergeGlobalConfig = (config) => Object.assign({}, globalConfig, config)

class ZingChart extends React.Component {

  componentDidMount() {
    this.initGraph(this.props.config)
  }

  initGraph(config) {
    zingchart.render({
      id: this.props.graphId,
      data: mergeGlobalConfig(config),
    })
  }

  render() {
    return (
      <div className="card zingchart">
        <div id={this.props.graphId}>
        </div>
      </div>
    )
  }
}

ZingChart.propTypes = {
  graphId: React.PropTypes.string,
  width: React.PropTypes.string,
  show: React.PropTypes.bool,
  config: React.PropTypes.object,
}

export {ZingChart}
