import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyA8DgOkb5DzlZMLIZXM1xQK_TIf6ptSnLc",
    authDomain: "unichat-f8ed9.firebaseapp.com",
    projectId: "unichat-f8ed9",
    storageBucket: "unichat-f8ed9.appspot.com",
    messagingSenderId: "146025828207",
    appId: "1:146025828207:web:c4d547a334d93e3dec229a",
  })
  .auth();
