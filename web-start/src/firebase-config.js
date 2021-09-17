/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBUMp_wurILX1oYIuPJfaavqBmUa4TdCfQ",
  authDomain: "friendlychat-cfeef.firebaseapp.com",
  projectId: "friendlychat-cfeef",
  storageBucket: "friendlychat-cfeef.appspot.com",
  messagingSenderId: "462437841210",
  appId: "1:462437841210:web:83839db9ae06cde387f803"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}