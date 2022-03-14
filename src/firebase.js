import firebase from './firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6ulGBBZhI40Va88LkH4DgkyUYwSDQuOk",
    authDomain: "slack-clone-f1cfb.firebaseapp.com",
    projectId: "slack-clone-f1cfb",
    storageBucket: "slack-clone-f1cfb.appspot.com",
    messagingSenderId: "342472256027",
    appId: "1:342472256027:web:444aa6f85fd083e9dca6be",
    measurementId: "G-YCQZBTWW0Z"
  };

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); //real time db in firebase

  export {auth,provider}; 
  export default db;
