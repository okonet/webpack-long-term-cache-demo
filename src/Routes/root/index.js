import component from './component'
import indexComponent from './indexComponent'

import routeA from '../routeA'
import routeB from '../routeB'

export default {
  path: '/',
  component,
  indexRoute: {
    component: indexComponent
  },
  childRoutes: [
    routeA,
    routeB
  ]
}
