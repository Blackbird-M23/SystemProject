// import { initializeApp } from 'firebase/app';
// import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// // Firebase configuration - Replace with your actual config
// const firebaseConfig = {
  
//   apiKey: "ENV_CONFIG.FIREBASE_API_KEY",

//   authDomain: ENV_CONFIG.FIREBASE_AUTH_DOMAIN,

//   projectId: ENV_CONFIG.FIREBASE_PROJECT_ID,

//   storageBucket: ENV_CONFIG.FIREBASE_STORAGE_BUCKET,

//   messagingSenderId: ENV_CONFIG.FIREBASE_MESSAGING_SENDER_ID,

//   appId: ENV_CONFIG.FIREBASE_APP_ID,

//   measurementId: ENV_CONFIG.FIREBASE_MEASUREMENT_ID
// };



// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// export const db = getFirestore(app);

// // Initialize Auth with AsyncStorage persistence
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

// // For development - uncomment these if you want to use Firebase emulators
// // if (__DEV__) {
// //   try {
// //     connectFirestoreEmulator(db, 'localhost', 8080);
// //     connectAuthEmulator(auth, 'http://localhost:9099');
// //   } catch (error) {
// //     console.log('Emulator connection error:', error);
// //   }
// // }

// export default app;


import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  FIREBASE_API_KEY, 
  FIREBASE_AUTH_DOMAIN, 
  FIREBASE_PROJECT_ID, 
  FIREBASE_STORAGE_BUCKET, 
  FIREBASE_MESSAGING_SENDER_ID, 
  FIREBASE_APP_ID 
} from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,               
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export default app;