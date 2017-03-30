import React from 'react'

const Leaderboard = (props, context) => {
  return (
    <div className="text-center">
      <h1>Welcome {context.data.user.userName}</h1>
    </div>
  )
}


Leaderboard.contextTypes = {
  data: React.PropTypes.object,
}

export {Leaderboard}
