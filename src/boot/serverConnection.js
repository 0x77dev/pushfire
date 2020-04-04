import firebaseService from '../services/firebase'

export default ({ router, store, Vue }) => {
  const config = {
    apiKey: 'AIzaSyCFeDmCqQORkiqunAzYjJ1EdT94gc-Ytz0',
    authDomain: 'pushfire-0x77dev.firebaseapp.com',
    databaseURL: 'https://pushfire-0x77dev.firebaseio.com',
    projectId: 'pushfire-0x77dev',
    storageBucket: 'pushfire-0x77dev.appspot.com',
    messagingSenderId: '577350862561',
    appId: '1:577350862561:web:9b40a7389c4fff4fe5d9a0',
    measurementId: 'G-1VQCMHBV6E'
  }
  firebaseService.fBInit(config)

  // Tell the application what to do when the
  // authentication state has changed
  firebaseService.auth().onAuthStateChanged(
    (currentUser) => {
      firebaseService.handleOnAuthStateChanged(store, currentUser)
    },
    (error) => {
      console.error(error)
    }
  )

  // Setup the router to be intercepted on each route.
  // This allows the application to halt rendering until
  // Firebase is finished with its initialization process,
  // and handle the user accordingly
  firebaseService.routerBeforeEach(router, store)

  Vue.prototype.$fb = firebaseService
  store.$fb = firebaseService
}
