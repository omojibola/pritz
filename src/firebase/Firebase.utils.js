import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDA6N4xznoZ97VDbHZdz6tPhjU9RegYkJQ",
  authDomain: "pritz-e5b67.firebaseapp.com",
  databaseURL: "https://pritz-e5b67.firebaseio.com",
  projectId: "pritz-e5b67",
  storageBucket: "pritz-e5b67.appspot.com",
  messagingSenderId: "572207246659",
  appId: "1:572207246659:web:1b8d0899290b358b6753f6",
  measurementId: "G-05WTS6RF9R",
};

//creating user profile document to store in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = database.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
