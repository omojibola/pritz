import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import notesReducer from "./notesReducer";

export default combineReducers({
  auth: authReducer,
  notes: notesReducer,

  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
