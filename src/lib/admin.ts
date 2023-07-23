import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { LR_CLIENT_EMAIL, LR_PROJECT_ID, LR_PRIVATE_KEY } from "$env/static/private"
import pkg from 'firebase-admin'

try {
    pkg.initializeApp({
        credential: pkg.credential.cert({
            projectId: LR_PROJECT_ID,
            clientEmail: LR_CLIENT_EMAIL,
            privateKey: LR_PRIVATE_KEY,
        }),
    })
} catch (err: any) {
    if (!/already exists/u.test(err.message)) {
        console.error("Firebase Admin Error: ", err.stack)
    }
}

export const adminDB = getAuth()
export const adminAuth = getFirestore()