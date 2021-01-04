import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBKhI7TYUi07O5jv-XG7AvnEt3HTDsDAzE',
  authDomain: 'crwn-db-b70b1.firebaseapp.com',
  databaseURL: 'https://crwn-db-b70b1.firebaseio.com',
  projectId: 'crwn-db-b70b1',
  storageBucket: 'crwn-db-b70b1.appspot.com',
  messagingSenderId: '997865515253',
  appId: '1:997865515253:web:806566e348f826bf7b3dbc',
  measurementId: 'G-VFFJJLZEMM',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth) {
    const userRef = firestore.collection('/users').doc(userAuth.uid);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = Date.now();

      try {
        userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (err) {
        console.log('Error ', err);
      }
    }
    return userRef;
  }
};

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.error('Firebase initialization error raised', err);
  }
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
