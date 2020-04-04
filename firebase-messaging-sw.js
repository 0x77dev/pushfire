/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyCFeDmCqQORkiqunAzYjJ1EdT94gc-Ytz0',
  authDomain: 'pushfire-0x77dev.firebaseapp.com',
  databaseURL: 'https://pushfire-0x77dev.firebaseio.com',
  projectId: 'pushfire-0x77dev',
  storageBucket: 'pushfire-0x77dev.appspot.com',
  messagingSenderId: '577350862561',
  appId: '1:577350862561:web:9b40a7389c4fff4fe5d9a0',
  measurementId: 'G-1VQCMHBV6E'
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()
