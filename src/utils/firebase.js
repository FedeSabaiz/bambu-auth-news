import firebase from 'firebase/app';
import firebaseConfig from '../config/firebase/config.js';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);
// db.settings({timestampInSnapshots: true});

export default firebase;