import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD6BQzmJzTTkm1ETvrFFi50o4sJy4OhdRM',
  authDomain: 'crwn-db-e4a94.firebaseapp.com',
  databaseURL: 'https://crwn-db-e4a94.firebaseio.com',
  projectId: 'crwn-db-e4a94',
  storageBucket: 'crwn-db-e4a94.appspot.com',
  messagingSenderId: '1051813934309',
  appId: '1:1051813934309:web:8dd7661fd8250fd214900c',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
