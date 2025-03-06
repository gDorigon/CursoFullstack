import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBrqjvBk9fggrHpd02vRssIMZUJFfwXC6M",
    authDomain: "curso-91ae7.firebaseapp.com",
    projectId: "curso-91ae7",
    storageBucket: "curso-91ae7.firebasestorage.app",
    messagingSenderId: "753479428394",
    appId: "1:753479428394:web:2ca321c84545d7a52c9653",
    measurementId: "G-FTNNNQY7XN"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export{db, auth};