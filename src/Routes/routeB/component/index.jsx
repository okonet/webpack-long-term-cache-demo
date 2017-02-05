import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router'

@observer
export default class Container extends React.Component {
  render () {
    return (
      <div>
        <p>You're on <strong>Route A</strong></p>
        <ul>
          <li><Link to='/route-b/child/1'>Route B child with ID 1</Link></li>
          <li><Link to='/route-b/child/2'>Route B child with ID 2</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
