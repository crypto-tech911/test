// Firebase web configuration.
//
// SECURITY NOTE: This object is NOT a secret. Firebase web config values
// (apiKey, projectId, etc.) are safe to expose in client-side code — they
// only identify which Firebase project to talk to. Actual access control
// is enforced by Firestore Security Rules and Firebase Authentication,
// never by hiding this object.
//
// Replace the placeholder values below with the config from:
// Firebase Console → Project Settings → General → Your apps → Web app

export const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_PROJECT.firebaseapp.com",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_PROJECT.appspot.com",
  messagingSenderId: "REPLACE_WITH_SENDER_ID",
  appId: "REPLACE_WITH_APP_ID",
};
