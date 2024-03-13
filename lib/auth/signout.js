
import firebase_app from './firebaseConfig';
import { getAuth, signOut } from "firebase/auth";
import secureLocalStorage from "react-secure-storage";

const auth = getAuth(firebase_app);

export const signoutfunc = async()=> {
  try {
    await signOut(auth);
    secureLocalStorage.removeItem('username');
    secureLocalStorage.setItem("loggedIn", false);
    return 'Signout successful';
  } catch (error) {
    return 'Error: ' + error.message;
  }
  }