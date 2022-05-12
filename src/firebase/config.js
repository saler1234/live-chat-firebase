import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBYkrU-uQfMh4ggkMVe0c_3pAO87iiVjiQ",
  authDomain: "vue-firebase-sites-2ee30.firebaseapp.com",
  projectId: "vue-firebase-sites-2ee30",
  storageBucket: "vue-firebase-sites-2ee30.appspot.com",
  messagingSenderId: "832895501454",
  appId: "1:832895501454:web:ce0a010e6545a5dcc8b5df"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init auth
const projectAuth = firebase.auth()

// init firestore
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }