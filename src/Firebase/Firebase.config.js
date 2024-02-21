// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAL84K6OrqgoHzXLVu_OHTBOah8Sdmdy0",
  authDomain: "scc-technovision-de5bb.firebaseapp.com",
  projectId: "scc-technovision-de5bb",
  storageBucket: "scc-technovision-de5bb.appspot.com",
  messagingSenderId: "377019147505",
  appId: "1:377019147505:web:59eacd48fb83b5d456f550",
  measurementId: "G-Y3E5NJGRG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app