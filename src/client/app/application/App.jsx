import React from 'react'
import {Layout} from '../features/layout/Layout';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from '../features/home/Home';
import {Leaderboard} from '../features/leaderboard/Leaderboard';
import {Dashboard} from '../features/dashboard/Dashboard';
import {Player} from '../features/dashboard/Player';
import {DataWrapper} from '../features/common/components/DataWrapper';

export default (props) => {
  return (
    <DataWrapper data={props}>
      <Router>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/dashboard/:userId' component={Player} />
        </Layout>
      </Router>
    </DataWrapper>
  )
}
