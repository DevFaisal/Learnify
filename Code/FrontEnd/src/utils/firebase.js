import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApuqUydDgyNEsr2KZ96-lBu0knxMOq7Vw",
  authDomain: "learnify-f296d.firebaseapp.com",
  projectId: "learnify-f296d",
  storageBucket: "learnify-f296d.appspot.com",
  messagingSenderId: "43209146818",
  appId: "1:43209146818:web:0d91fd4f28f4cb86d4d65b",
  measurementId: "G-5E6Q3HQCTG",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export const verifyIdToken = async (accessToken) => {
  const auth = getAuth(app);
  const user = await signInWithCustomToken(auth, accessToken);
  return user;
};
