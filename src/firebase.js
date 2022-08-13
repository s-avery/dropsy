// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA9vwGLhAug1lkA8XpnEOCwHsPLMJEcZ1M",
	authDomain: "ff14-gear-planner.firebaseapp.com",
	projectId: "ff14-gear-planner",
	storageBucket: "ff14-gear-planner.appspot.com",
	messagingSenderId: "715513256133",
	appId: "1:715513256133:web:db25e3ae787e358b01b8ac",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
