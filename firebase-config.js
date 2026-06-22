// Firebase Configuration
// Replace these with your actual Firebase project credentials

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "xposelast24h-news.firebaseapp.com",
  projectId: "xposelast24h-news",
  storageBucket: "xposelast24h-news.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Google Sign In Function
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}

// Sign Out Function
export async function userSignOut() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
  }
}
