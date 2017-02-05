import Authorize from 'components/Authorize'
import component from './component'
import indexComponent from './indexComponent'
import childComponent from './childComponent'

export default {
  path: 'route-b',
  component: component,
  indexRoute: {
    component: Authorize({ isAdmin: true, admin: indexComponent })
  },
  childRoutes: [
    childComponent
  ]
}
