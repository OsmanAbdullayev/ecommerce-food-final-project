// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCCXqXFUddg3aQTjWB-VSijNQa-ptq2Y0s",
  authDomain: "ecommerce-food-final-project.firebaseapp.com",
  projectId: "ecommerce-food-final-project",
  storageBucket: "ecommerce-food-final-project.appspot.com",
  messagingSenderId: "73793959806",
  appId: "1:73793959806:web:531cf7727507491d5d252f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app