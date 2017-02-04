import React from 'react'
import { observer } from 'mobx-react'
import _ from 'lodash'

@observer
export default class IndexComponent extends React.Component {
  render () {
    return (
      <div>
        Just an index component
      </div>
    )
  }
}
