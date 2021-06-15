import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAq68Z3vWdrCggLo-xR2bSRseEq5FBt16E",
    authDomain: "disneyplus-clone-86dbb.firebaseapp.com",
    projectId: "disneyplus-clone-86dbb",
    storageBucket: "disneyplus-clone-86dbb.appspot.com",
    messagingSenderId: "582369867627",
    appId: "1:582369867627:web:921b795570b8cbf79e3e2e",
    measurementId: "G-JHJMEQ7EFF"
  };

 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage};
  export default db;