import React from 'react'

const Home = (props, context) => {
  return (
    <div>
      <h1>Topout</h1>
      <h3>{context.data.user && context.data.user.userName || <a href="/auth/github">login with github</a>}</h3>
    </div>
  )
}


Home.contextTypes = {
  data: React.PropTypes.object,
}

export {Home}
