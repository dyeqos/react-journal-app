import  firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBNpxyZxPD2gKtj25LtRrz5rbfCyjF7L_Y",
    authDomain: "react-journal-app-4b3ec.firebaseapp.com",
    projectId: "react-journal-app-4b3ec",
    storageBucket: "react-journal-app-4b3ec.appspot.com",
    messagingSenderId: "746592987004",
    appId: "1:746592987004:web:5b6df9e5cffeeb1545a6f9"
  };
  
  // Initialize Firebase
  firebase.initializeApp( firebaseConfig );

  const db = firebase.firestore(); // firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();// firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }
