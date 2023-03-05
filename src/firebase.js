// import firebase from 'firebase';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyA36UeaAy7aJ-fsDoJMMd2OHopxe9lr0ew",
//   authDomain: "reactprojects-12bbe.firebaseapp.com",
//   projectId: "reactprojects-12bbe",
//   storageBucket: "reactprojects-12bbe.appspot.com",
//   messagingSenderId: "742066518833",
//   appId: "1:742066518833:web:e710f55d1e21fa3a9d4e10",
//   measurementId: "G-90J34QXW54"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;



// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';


// const firebaseConfig = {
//   apiKey: "AIzaSyDSM52yQ8qZpOPQd0x9IpTCBiDZ280-rqA",
//   authDomain: "disney-clone-gt.firebaseapp.com",
//   projectId: "disney-clone-gt",
//   storageBucket: "disney-clone-gt.appspot.com",
//   messagingSenderId: "507732554521",
//   appId: "1:507732554521:web:f7a14dc908c6757e1b4b88",
//   measurementId: "G-G0ZYHF7RFY"
// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth(); 
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export {auth, provider, storage};
// export default db;



import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAYYTMJ5f542MM3RxNLz0hsXVY0fihyQl4",
    authDomain: "disney-plus-unofficial.firebaseapp.com",
    projectId: "disney-plus-unofficial",
    storageBucket: "disney-plus-unofficial.appspot.com",
    messagingSenderId: "306515018549",
    appId: "1:306515018549:web:d15552e0ca086ed2af427c"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();


export { firebaseApp, auth, provider, storage };
export default db;