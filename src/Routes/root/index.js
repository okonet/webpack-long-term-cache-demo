import component from './component'
import indexComponent from './indexComponent'

import routeA from '../routeA'

export default {
  path: '/',
  component,
  indexRoute: {
    component: indexComponent
  },
  childRoutes: [
    routeA
  ]
}
