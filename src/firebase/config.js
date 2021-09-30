import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAzyu2ixKRUQOHxTZEWksuwR4t22kxpdng',
//   authDomain: 'chat-app-d6020.firebaseapp.com',
//   projectId: 'chat-app-d6020',
//   storageBucket: 'chat-app-d6020.appspot.com',
//   messagingSenderId: '39752548726',
//   appId: '1:39752548726:web:a0dd4dc609827bf508ba57',
//   measurementId: 'G-BSQT09SFPR',
// };

//mail duyhoangpub@gmail.com pass duy1
const firebaseConfig = {
  apiKey: 'AIzaSyDYTHT3gvjdpMR9pAkEUxXWIKovReS9A_c',
  authDomain: 'chat-app-97648.firebaseapp.com',
  projectId: 'chat-app-97648',
  storageBucket: 'chat-app-97648.appspot.com',
  messagingSenderId: '356707814720',
  appId: '1:356707814720:web:dfe6c1e00082649ffb3ea5',
  measurementId: 'G-3KX54RWP14',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// if (window.location.hostname === 'localhost') {
//   auth.useEmulator('http://localhost:9099');
//   db.useEmulator('localhost', '8080');
// }

export { db, auth };
export default firebase;
