import React from 'react'
import { observer } from 'mobx-react'
import { Router, browserHistory } from 'react-router'
import rootRoute from './root'

@observer
export default class Routes extends React.Component {
  rootRoute () {
    return {
      childRoutes: [
        rootRoute
      ]
    }
  }

  render () {
    return (
      <Router
        history={browserHistory}
        routes={this.rootRoute()}
      />
    )
  }
}