// Import the functions you need from the SDKs you need
import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKF_KgGtzGV7y8tEzFhTPoxhXfp9v5IZg",
  authDomain: "islam-diplom.firebaseapp.com",
  projectId: "islam-diplom",
  storageBucket: "islam-diplom.appspot.com",
  messagingSenderId: "787747365873",
  appId: "1:787747365873:web:94f9fc0e303b5b2dcb9a50",
};

// Initialize Firebase
export default fire.initializeApp(firebaseConfig);
