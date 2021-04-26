import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBibZZwl8GowZY_ISIZ6YpKJaMpwc8MTsI",
    authDomain: "crwn-clothing-db-c3be3.firebaseapp.com",
    projectId: "crwn-clothing-db-c3be3",
    storageBucket: "crwn-clothing-db-c3be3.appspot.com",
    messagingSenderId: "246009964304",
    appId: "1:246009964304:web:a9529b2a7396cefef4e795",
    measurementId: "G-91695KGSSL"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
