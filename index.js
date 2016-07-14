var React = require('react');
var ReactDOM = require('react-dom');

var firebase = require('firebase/app');
require('firebase/database');

var config = {
    apiKey: "*",
    authDomain: "*",
    databaseURL: "*",
    storageBucket: "*",
};
firebase.initializeApp(config);

window.firebase = firebase;

ReactDOM.render(<h1>Hello React!</h1>, document.getElementById('root'));
