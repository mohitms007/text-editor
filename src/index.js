import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAdKcSDJ88XjxeRBTrFVMaDSLfYgYMG_3Y",
  authDomain: "evernote-clone-b6f62.firebaseapp.com",
  projectId: "evernote-clone-b6f62",
  storageBucket: "evernote-clone-b6f62.appspot.com",
  messagingSenderId: "561238256271",
  appId: "1:561238256271:web:d4cc257f329a051bc71efa",
  measurementId: "G-SZTJ99R988"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
