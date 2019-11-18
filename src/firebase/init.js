import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCdcTmT8ZUj2RIZINpowqp2QP5zneeziH4",
    authDomain: "chi-mooc.firebaseapp.com",
    databaseURL: "https://chi-mooc.firebaseio.com",
    projectId: "chi-mooc",
    storageBucket: "chi-mooc.appspot.com",
    messagingSenderId: "762658916914",
    appId: "1:762658916914:web:f40ec1140845c2ec218a2b",
    measurementId: "G-T8PSDJ407R"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()