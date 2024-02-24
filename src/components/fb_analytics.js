// Import necessary Firebase modules
import { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Track a custom event using Firebase Analytics
const logCustomEvent = () => {
  useEffect(() => {
    firebase.analytics().logEvent('custom_event', { parameter: 'example' });
  }, []);
};

// Use the logCustomEvent function where needed
