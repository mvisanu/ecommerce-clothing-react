import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyANN00eVs3DTonyNQy-oBP0uCE0yx5yEa8",
  authDomain: "crwn-db-58bd5.firebaseapp.com",
  projectId: "crwn-db-58bd5",
  storageBucket: "crwn-db-58bd5.appspot.com",
  messagingSenderId: "632880070781",
  appId: "1:632880070781:web:00295ef61cd1525cdb7114",
  measurementId: "G-2TFE4FB276",
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
