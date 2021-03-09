import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVUJdOvbwvjRHDNvKgx3Uvsxe8fUOtPCQ",
    authDomain: "interact-e54d0.firebaseapp.com",
    projectId: "interact-e54d0",
    storageBucket: "interact-e54d0.appspot.com",
    messagingSenderId: "306882113680",
    appId: "1:306882113680:web:f1eeeba23db9dc41802815"
  };


  let app;

  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };