import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import firebase_app from './firebaseConfig';

const db = getFirestore(firebase_app);

export const getUserByAccessToken = async (Username) => {
  try {
    const usersCollection = collection(db, 'users');
    const querySnapshot = await getDocs(usersCollection);

    let foundUser = null;
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      if (userData.username === Username) {
        foundUser = { id: doc.id, ...userData };
        return userData;
      }
      else {
        return null
      }
    });
    return foundUser;
  } catch (error) {
    console.error('Error getting users by access token:', error);
    return null;
  }
};