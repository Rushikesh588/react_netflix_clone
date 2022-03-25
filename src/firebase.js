import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD_bYPmftwHiB-pDb4jtM2CgMpDXWmccQ",
  authDomain: "netflix-clone-b2f47.firebaseapp.com",
  databaseURL: "https://netflix-clone-b2f47.firebaseio.com",
  projectId: "netflix-clone-b2f47",
  storageBucket: "netflix-clone-b2f47.appspot.com",
  messagingSenderId: "550570309179",
  appId: "1:550570309179:web:bff10fcfed05fdea818e1e",
  measurementId: "G-LH7EV0MRSF",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
