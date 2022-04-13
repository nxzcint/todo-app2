import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAAORMmIo7XwuhnzRPwlabG-xK9V_J0HB4",
    authDomain: "todo-app2-e8ff5.firebaseapp.com",
    projectId: "todo-app2-e8ff5",
    storageBucket: "todo-app2-e8ff5.appspot.com",
    messagingSenderId: "849553073983",
    appId: "1:849553073983:web:4134f0b761e2656e3a958a",
    measurementId: "G-B81N6QL7F2"
  });

  const db = firebaseApp.firestore();

  export default db;


