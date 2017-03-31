'use strict'

const getValues = (data) => {

  return data.map(function(score) {
    return score.score
  })
}


const config = (data, title, color) => {
  return {
    type: 'line',
    title: {
      text: title,
      fontWeight: 'normal',
      fontSize: '30px',
      padding: '5px, 0, 0, 0',
      adjustLayout: true,
    },
    legend: {
      visible: false,
    },
    series: [
      {
        values: getValues(data),
        lineColor: color
      }
    ],
    plot: {
      marker: {
        visible: false
      }
    },
    scaleY: {
      values:"0:100:20",
      label: {
        text: 'Score'
      }
    },
    scaleX: {
      visible: false
    }
  }
}

export {config}
