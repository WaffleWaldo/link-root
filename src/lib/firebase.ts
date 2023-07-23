import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

const firebaseConfig = {
    apiKey: "AIzaSyAsgwyqCvv86wx_xcjT9k2H5uy-sxl2f-E",
    authDomain: "link-root.firebaseapp.com",
    projectId: "link-root",
    storageBucket: "link-root.appspot.com",
    messagingSenderId: "903711819655",
    appId: "1:903711819655:web:6027c31d342ce2eb753522",
    measurementId: "G-K57V43H615"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

function userStore(){
    let unsubscribe: () => void

    if (!auth || !globalThis.window) {
        console.warn('Auth is not initialized or not in browser');
        const { subscribe } = writable<User | null>(null);
        return {
            subscribe,
        }
    }

    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user)
        })

        return () => unsubscribe()
    })

    return {
        subscribe
    }
}


export const user = userStore();