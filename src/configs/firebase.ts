import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyAPLBplcM9EtF_AKjZztjUwAt9q80vtBlM',
  authDomain: 'chat-kit-d2adf.firebaseapp.com',
  databaseURL: 'https://chat-kit-d2adf.firebaseio.com',
  projectId: 'chat-kit-d2adf',
  storageBucket: 'chat-kit-d2adf.appspot.com',
  messagingSenderId: '590012450482',
  appId: '1:590012450482:web:a04c9beeb83f149080abab',
  measurementId: 'G-1RRV3MP58T',
}
firebase.initializeApp(firebaseConfig)
export default firebase