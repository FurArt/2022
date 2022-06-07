import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9aoDf19SQm8LWutNmVYOqxdUTuEi7aMg",
  authDomain: "react-app-bea6e.firebaseapp.com",
  projectId: "react-app-bea6e",
  storageBucket: "react-app-bea6e.appspot.com",
  messagingSenderId: "767098415676",
  appId: "1:767098415676:web:f0da219e2cc22b23793139",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); // доступ до бази

export const createUserData = async (userAuth) => {
  const checkUseruserDocRef = doc(db, "users", userAuth.uid);
  const checkUser = (await getDoc(checkUseruserDocRef)).exists();
  console.log(checkUseruserDocRef);
  console.log("checkUser: ", checkUser);

  if (!checkUser) {
    const { displayName, email } = userAuth;
    const createUserDate = new Date();
    try {
      await setDoc(checkUseruserDocRef, {
        displayName,
        email,
        createUserDate,
      });
    } catch (error) {console.log(error)}
  }
};

// запит на наявність користувача (база, колекція, користувач)
