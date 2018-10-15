import {createStore, combineReducers, compose} from 'redux';

import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7uCuTBINneA-JQNfM-3O2XGHwe1JYW_k",
  authDomain: "contact-manger-61d5a.firebaseapp.com",
  databaseURL: "https://contact-manger-61d5a.firebaseio.com",
  projectId: "contact-manger-61d5a",
  storageBucket: "contact-manger-61d5a.appspot.com",
  messagingSenderId: "163445928281"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
// intialize firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// create initial state
const initialState = {};

//create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
