import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAzyu2ixKRUQOHxTZEWksuwR4t22kxpdng',
  authDomain: 'chat-app-d6020.firebaseapp.com',
  projectId: 'chat-app-d6020',
  storageBucket: 'chat-app-d6020.appspot.com',
  messagingSenderId: '39752548726',
  appId: '1:39752548726:web:a0dd4dc609827bf508ba57',
  measurementId: 'G-BSQT09SFPR',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  auth.useEmulator('http://localhost:9099');
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
