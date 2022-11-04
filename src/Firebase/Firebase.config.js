// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJvSbtDMpg72ZfuUYkrmLRGTjDdgoRPP0",
  authDomain: "ctg-car-service.firebaseapp.com",
  projectId: "ctg-car-service",
  storageBucket: "ctg-car-service.appspot.com",
  messagingSenderId: "781848883542",
  appId: "1:781848883542:web:a6f39285daeca89980a6f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;