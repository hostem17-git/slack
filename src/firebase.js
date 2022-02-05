import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCIDiwyPK0Oa96a1JBQpS4jTwHu5-ldYz4",
    authDomain: "slack-clone-562d1.firebaseapp.com",
    projectId: "slack-clone-562d1",
    storageBucket: "slack-clone-562d1.appspot.com",
    messagingSenderId: "238001516491",
    appId: "1:238001516491:web:22f2410c922d478f68104e",
    measurementId: "G-WF8LC21BDX"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { db, auth, provider }