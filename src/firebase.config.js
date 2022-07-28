// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyANKxmLC8zgiTVBCu2cQr4Frtn4X_s5QLw',
  authDomain: 'house-marketplace-app-c8587.firebaseapp.com',
  projectId: 'house-marketplace-app-c8587',
  storageBucket: 'house-marketplace-app-c8587.appspot.com',
  messagingSenderId: '798659918913',
  appId: '1:798659918913:web:9b79982aadb7064a811ac0',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
