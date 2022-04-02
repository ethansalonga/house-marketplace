import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV80_UBmIkZO-fJbMYSs_kbouja7EfOzA",
  authDomain: "house-marketplace-app-fcaa9.firebaseapp.com",
  projectId: "house-marketplace-app-fcaa9",
  storageBucket: "house-marketplace-app-fcaa9.appspot.com",
  messagingSenderId: "94873226517",
  appId: "1:94873226517:web:15fd83a5ab76e5299ced1c",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
