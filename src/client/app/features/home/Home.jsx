import React from 'react'

const Home = (props, context) => {
  return (
    <div className="text-center">
      <h1>Play Topout - <a href="/auth/github"><img height="22px" src="/images/Github-Mark-32px.png"></img></a></h1>

      <img src="http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/funny-nigel-thornberry-gifs-run-twilight.gif"/>
    </div>
  )
}


Home.contextTypes = {
  data: React.PropTypes.object,
}

export {Home}
