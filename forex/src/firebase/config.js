import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const config = {
    apiKey: "AIzaSyBjVhquXr_XYJq4tDt9zeWfig3AaU36GTM",
    authDomain: "forex-b3ab9.firebaseapp.com",
    databaseURL: "https://forex-b3ab9.firebaseio.com",
    projectId: "forex-b3ab9",
    storageBucket: "forex-b3ab9.appspot.com",
    messagingSenderId: "981662663618",
    appId: "1:981662663618:web:d46266ad9d53978f79cc5b"
}


class Firebase{
    constructor(){
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }
    // Login in the user if user exist.
    async login(email,password){
        const admin = await firebase.auth().signInWithEmailAndPassword(email,password).catch( err => {
            console.log(err);
            return err;
        })
        return admin;
    }
    // Get the user State if user is logged in.
    async getUserState(){
        console.log('config.')
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        })
    }
}


export default new Firebase();