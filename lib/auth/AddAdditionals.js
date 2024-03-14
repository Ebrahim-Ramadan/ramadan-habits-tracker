import { doc, updateDoc, getDoc, addDoc, collection, query, getFirestore, where, getDocs} from 'firebase/firestore';
import firebase_app from './firebaseConfig';

const db = getFirestore(firebase_app);

export const AddAdditionals = async (userEmail, newActivity) => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', userEmail));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userDocRef = doc(db, 'users', userDoc.id);
  
        // Get the existing additionals array or create a new one if it doesn't exist
        const userData = userDoc.data();
        const additionalsArray = userData.additionals || [];
  
        // Add the new activity to the additionals array
        additionalsArray.push(newActivity);
  
        // Update the user document with the new additionals array
        await updateDoc(userDocRef, { additionals: additionalsArray });
  
        console.log('Activity added to user successfully');
        return true; // Return true on success
      } else {
        console.error('User document not found');
        return false; // Return false if user document not found
      }
    } catch (error) {
      console.error('Error updating Firestore document:', error);
      return false; // Return false if there's an error
    }
  };

  export const getAdditionalPrayers = async (userEmail) => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', userEmail));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        const additionalsArray = userData.additionals || [];
        return additionalsArray;
        // const lastElement = additionalsArray.length > 0 ? additionalsArray[additionalsArray.length - 1] : null;
        // return lastElement; // Return the last element of the additionals array, or null if the array is empty
      } else {
        console.error('User document not found');
        return null; // Return null if user document not found
      }
    } catch (error) {
      console.error('Error fetching additionals document:', error);
      return null; // Return null if there's an error
    }
  };
  