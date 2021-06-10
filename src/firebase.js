import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBMr67fZzOBbdRxZ1Z6GT_HuudtIb3m9fU",
    authDomain: "discord-clone-yt-a791a.firebaseapp.com",
    projectId: "discord-clone-yt-a791a",
    storageBucket: "discord-clone-yt-a791a.appspot.com",
    messagingSenderId: "414141861972",
    appId: "1:414141861972:web:342c96ea01598f79bf9dc1",
    measurementId: "G-KGS0T4QSLK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db