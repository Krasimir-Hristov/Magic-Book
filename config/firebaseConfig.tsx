// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'magic-book-b50a8.firebaseapp.com',
  projectId: 'magic-book-b50a8',
  storageBucket: 'magic-book-b50a8.appspot.com',
  messagingSenderId: '621524269335',
  appId: '1:621524269335:web:8cde1b45e3d508b0f1df52',
  measurementId: 'G-2LYEEBNVJ2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
