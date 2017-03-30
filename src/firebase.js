import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB9Jd_9HGYOByLItcGrTVXWPLRD8HGazgY',
  authDomain: 'lunch-rush-1a3f0.firebaseapp.com',
  databaseURL: 'https://lunch-rush-1a3f0.firebaseio.com',
  storageBucket: 'lunch-rush-1a3f0.appspot.com',
  messagingSenderId: '921614943407'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
