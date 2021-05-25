import 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import firebase from 'firebase/app';


const config = {
  apiKey: "AIzaSyCZBuVWtXZ-_5S1G8hLpKwNHQmewhqmwKw",
  authDomain: "m-city-meydan.firebaseapp.com",
  databaseURL: "https://m-city-meydan-default-rtdb.firebaseio.com",
  projectId: "m-city-meydan",
  storageBucket: "m-city-meydan.appspot.com",
  messagingSenderId: "868578351742",
  // appId: "1:868578351742:web:af4a0cf83c589fd1a9962f",
  // measurementId: "G-NE9VYENEZ1"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase, firebaseMatches, firebasePromotions,
    firebaseTeams, firebasePlayers, firebaseDB
}