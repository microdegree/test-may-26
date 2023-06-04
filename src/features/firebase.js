import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_WOHhnHsP6dX5KpckTGSlnmk_Xyqhw08",
  authDomain: "leadwebmicrodegree.firebaseapp.com",
  projectId: "leadwebmicrodegree",
  storageBucket: "leadwebmicrodegree.appspot.com",
  messagingSenderId: "211976032374",
  appId: "1:211976032374:web:d32077e0ee3f3062328f57",
  measurementId: "G-N1M91D6WM0"
  };

  const firebase = Firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  
  export { firebase, db };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore();
// export default db