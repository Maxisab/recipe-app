import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDbREEZ4Qnbf5jxNcFvZAhjIo9WEOqKiUc",
  authDomain: "cooking-ninja-site-226fa.firebaseapp.com",
  projectId: "cooking-ninja-site-226fa",
  storageBucket: "cooking-ninja-site-226fa.appspot.com",
  messagingSenderId: "499411374314",
  appId: "1:499411374314:web:1f6bc4e44143260a6e0793"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }