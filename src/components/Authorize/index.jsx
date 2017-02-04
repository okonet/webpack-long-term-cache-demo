import React from 'react'
import { observer } from 'mobx-react'
import NotFound from 'components/NotFound'

export default (options) => {
  return observer(class Proxy extends React.Component {
    render () {
      const AdminComponent = options.admin || NotFound
      const BasicComponent = options.basic || NotFound

      if (options.admin) {
        return <AdminComponent {...this.props} />
      } else {
        return <BasicComponent {...this.props} />
      }
    }
  })
}
