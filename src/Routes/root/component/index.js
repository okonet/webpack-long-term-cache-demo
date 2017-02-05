import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router'

@observer
export default class RootContainer extends React.Component {
  render () {
    return (
      <div>
        <h1>Long term webpack caching</h1>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='route-a'>Route A</Link></li>
          <li><Link to='route-b'>Route B</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
