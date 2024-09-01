import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBzTpxi4LfDfgrbLNcB0UfwCYHhx0s5-rE',
  authDomain: 'memorize-6ae41.firebaseapp.com',
  databaseURL: 'https://memorize-6ae41-default-rtdb.firebaseio.com',
  projectId: 'memorize-6ae41',
  storageBucket: 'memorize-6ae41.appspot.com',
  messagingSenderId: '315582420206',
  appId: '1:315582420206:web:cc66dacd4ffef86e214fff',
  measurementId: 'G-PTHK6LB2FC'
}

const firebaseApp = initializeApp(firebaseConfig)

// Get a reference to the database service
export const db = getDatabase(firebaseApp)

// Get a reference to the auth service
export const auth = getAuth(firebaseApp)
