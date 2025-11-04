// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnxUdyQSLJ7geJgmoO4oa5v7MoN3GvAEc",
  authDomain: "myproject-a9d45.firebaseapp.com",
  databaseURL: "https://myproject-a9d45-default-rtdb.firebaseio.com",
  projectId: "myproject-a9d45",
  storageBucket: "myproject-a9d45.firebasestorage.app",
  messagingSenderId: "902759402896",
  appId: "1:902759402896:web:be9c70ebb0764043217715",
  measurementId: "G-P71RRYM99B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);