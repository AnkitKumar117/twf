import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const app = firebase.initializeApp({
    apiKey: "AIzaSyCQUSbjJOJfEIrAgz8WpFWIEVHkYCGJbPY",
    authDomain: "twf-auth.firebaseapp.com",
    projectId: "twf-auth",
    storageBucket: "twf-auth.appspot.com",
    messagingSenderId: "455724402959",
    appId: "1:455724402959:web:13332e745654d0404c967a"
});
export const auth = app.auth();
const db = app.firestore();
export default db;