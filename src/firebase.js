import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmtMyBUmjn7o3820G6b6AtgNxn4IQblG8",
  authDomain: "netflix-2f02c.firebaseapp.com",
  projectId: "netflix-2f02c",
  storageBucket: "netflix-2f02c.appspot.com",
  messagingSenderId: "984098452954",
  appId: "1:984098452954:web:fe8b41dc0c77d600c1bce3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
