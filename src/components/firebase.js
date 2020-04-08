import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA3AjwVMSUeFplSt78VrXdxSwfbvZlvbTw",
    authDomain: "crudgatsby.firebaseapp.com",
    databaseURL: "https://crudgatsby.firebaseio.com",
    projectId: "crudgatsby",
    storageBucket: "crudgatsby.appspot.com",
    messagingSenderId: "722899586162",
    appId: "1:722899586162:web:8893a7a58e5aea8825c6eb",
    measurementId: "G-SHVHJ2J0P8"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase