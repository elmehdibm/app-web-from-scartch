import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from "./routes";
import thestore from './configureStore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdvg3p88I7KIq8odOixKWZe-GdmZIacKM",
  authDomain: "app-web-from-scrach.firebaseapp.com",
  projectId: "app-web-from-scrach",
  storageBucket: "app-web-from-scrach.appspot.com",
  messagingSenderId: "352676592524",
  appId: "1:352676592524:web:feafac40dbea3b05b274a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={thestore}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
