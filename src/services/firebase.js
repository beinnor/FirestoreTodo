// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAALBQaE_pUH57vuCNW1jSB8wcy-titZLk',
  authDomain: 'firestoretodo-44140.firebaseapp.com',
  projectId: 'firestoretodo-44140',
  storageBucket: 'firestoretodo-44140.appspot.com',
  messagingSenderId: '283423451262',
  appId: '1:283423451262:web:9a714e3d1c9e0b3c65502f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
