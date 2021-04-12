import firebase from 'firebase'
import "@firebase/auth";
import "@firebase/firestore";

// npm install --save firebase

let config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL ,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID ,
    appId: process.env.REACT_APP_APPID
}

if (!firebase.apps.length) firebase.initializeApp(config);

//const firebase = firebase.initializeApp(config)

export  { firebase }