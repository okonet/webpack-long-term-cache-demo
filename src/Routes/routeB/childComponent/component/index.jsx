import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class ChildComponent extends React.Component {
  render () {
    return (
      <div>
        Here we're with params ID: <strong>route-B-ID-{this.props.params.id}</strong>
      </div>
    )
  }
}
