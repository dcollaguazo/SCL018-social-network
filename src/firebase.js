import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';
import {
    getFirestore,
    collection,
    addDoc,
    Timestamp
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';


//Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCBpEVStPLTt7nQ9p_aIXfcifx1mjLUQIc",
    authDomain: "agents-social-network.firebaseapp.com",
    projectId: "agents-social-network",
    storageBucket: "agents-social-network.appspot.com",
    messagingSenderId: "562655598440",
    appId: "1:562655598440:web:39be7a34bcb6cd1bbba8dd",
    measurementId: "G-EYRGEWRY4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Getting FirebaseAuth object
const auth = getAuth(app);

//Setting userName
const userName = localStorage.getItem('userName');

// Auth Observer
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        localStorage.setItem("userName", user.displayName);
        localStorage.setItem("signedin", "true");

    } else {
        // User is signed out
        localStorage.removeItem('signedin');
    }
});

// get Firestore db
const db = getFirestore();

//Login/SignUp with Google Account
export const registerWithGoogle = () => {

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            window.location.assign('#/feed')
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

//LogIn/SignUp with Email and Password
export const registerWithEmailAndPass = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.assign('#/feed')
            console.log(`${user} has been created`);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (errorCode) {
                case 'auth/weak-password':
                    alert('Password is too weak!');
                    break;
                case 'auth/email-already-in-use':
                    alert('Email is already in use!');
                    break;
                default:
                    console.log(`An error has occurred: ${errorCode}`);

            }
        });
}





// Post in Firestore
export const addReview = async () => {
    // alert(typeof ));

    // console.log(userName);
    const addReview = await addDoc(collection(db, "reviews"), {
        datePost: Timestamp.fromDate(new Date()),
        userName: userName
        // userEmail: localStorage.getItem('userEmail')
    });


    return addReview;
}