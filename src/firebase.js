import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBeWbaxQkilsFMFW0BDZ-z-SR6_oskM1WA",
    authDomain: "insta-clone-4dfc1.firebaseapp.com",
    projectId: "insta-clone-4dfc1",
    storageBucket: "insta-clone-4dfc1.appspot.com",
    messagingSenderId: "109010374872",
    appId: "1:109010374872:web:bbe38ea270e969aaaac7ad",
    measurementId: "G-5Q802NN1Y5"
  });

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

  
  export default {db,auth,storage}