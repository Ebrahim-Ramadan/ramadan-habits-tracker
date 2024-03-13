import { doc, updateDoc, getDoc, addDoc, collection, query, getFirestore, where, getDocs} from 'firebase/firestore';
import firebase_app from './firebaseConfig';

const db = getFirestore(firebase_app);

export const batchCheckboxes = async (userEmail, updatedPrayers) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('username', '==', userEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userDocRef = doc(db, 'users', userDoc.id);

      const prayersObj = {};
      updatedPrayers.forEach((prayer) => {
        const { name, checked } = prayer;
        // Filter out the indices (days) where checked is true
        const trueDays = checked.reduce((acc, isChecked, index) => {
          if (isChecked) {
            acc.push(index + 1); // Adding 1 to index to match day numbers starting from 1
          }
          return acc;
        }, []);
        prayersObj[name.toLowerCase()] = trueDays;
      });

      await updateDoc(userDocRef, { prayers: prayersObj });

      console.log('Prayers batch updated successfully');
      return true
    } else {
      console.error('User document not found');
      return false
    }
  } catch (error) {
    console.error('Error updating Firestore document:', error);
    return false
  }
};


export const getPrayersForUser = async (userEmail) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('username', '==', userEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      return userData.prayers || []; // Return the prayers array, or an empty array if not found
    } else {
      console.error('User document not found');
      return [];
    }
  } catch (error) {
    console.error('Error fetching prayers document:', error);
    return [];
  }
};
