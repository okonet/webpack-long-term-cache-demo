//import Authorize from 'components/Authorize'
//import component from './component'
//import indexComponent from './indexComponent'
//import childComponent from './childComponent'

/**
 * indexRoute: {
 * component: Authorize({ isAdmin: true, admin: indexComponent })
 * },
 */
export default {
  path: 'route-a',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./component'))
    })
  },
  getIndexRoute(partialNextState, cb) {
    // do something async here
    cb(null, require('./indexComponent'))
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./childComponent'),
      ])
    })
  }
}
