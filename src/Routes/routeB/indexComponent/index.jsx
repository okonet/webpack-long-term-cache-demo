import React from 'react'
import { observer } from 'mobx-react'
import _map from 'lodash/map';


@observer
export default class IndexComponent extends React.Component {
  render () {
    const mapAdd = _map([1, 2, 3], (item) => item + 1);
    console.log('chunk', mapAdd);
    return (
      <div>
        Just an index component
      </div>
    )
  }
}
