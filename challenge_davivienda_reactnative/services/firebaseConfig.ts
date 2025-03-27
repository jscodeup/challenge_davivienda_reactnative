import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDTnjb2eA9cVXPe1XIvFpO0u_Ooas16BN0",
    authDomain: "challenge-davivienda-reactnat.firebaseapp.com",
    databaseURL: "https://challenge-davivienda-reactnat-default-rtdb.firebaseio.com",
    projectId: "challenge-davivienda-reactnat",
    storageBucket: "challenge-davivienda-reactnat.firebasestorage.app",
    messagingSenderId: "25863901050",
    appId: "1:25863901050:web:cb29183b51e1bbcdc2d0c3"
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
  }
  
  export const auth = getAuth();
  export const firestore = getFirestore();
  