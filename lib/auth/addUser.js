import firebase_app from './firebaseConfig';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

export const handleCreateUser = async (username, uid) => {
    
    const credentials ={
        username,
        uid,
        prayers:[],
      }
    try {
        const usersCollection = collection(db, 'users');
        await addDoc(usersCollection, credentials);
      console.log('User created successfully');
      return true;
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };