import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

alert('Add your firebase config!');
const firebaseConfig = {
    apiKey: "AIzaSyC8bZzrpRoNzNGf0qAmgIwslfOpMBx9xlg",
    authDomain: "fir-demo-js2-fbb07.firebaseapp.com",
    projectId: "fir-demo-js2-fbb07",
    storageBucket: "fir-demo-js2-fbb07.appspot.com",
    messagingSenderId: "428124244465",
    appId: "1:428124244465:web:3b0b4b034c1a1098751c50",
    measurementId: "G-TCG3R7D7YF"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};
