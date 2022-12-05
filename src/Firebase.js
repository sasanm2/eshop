import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCC-Mdf2RnDZVVm94ljk5egELB14ety4Og",
    authDomain: "eshop-3d31f.firebaseapp.com",
    projectId: "eshop-3d31f",
    storageBucket: "eshop-3d31f.appspot.com",
    messagingSenderId: "829678855720",
    appId: "1:829678855720:web:71a775be7d6356f82af71d",
    measurementId: "G-M6CEYRYLWB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};