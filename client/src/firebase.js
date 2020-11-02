
import * as firebase from 'firebase/app';

import 'firebase/auth';

// Insert firebase config here
const firebaseConfig = {
};

// Initialize Firebase
export function onAuthStateChanged() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User is not authenticated'));
      }
    });
  });
}

firebase.initializeApp(firebaseConfig);

export default firebase;
