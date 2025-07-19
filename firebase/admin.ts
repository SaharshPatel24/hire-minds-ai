import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    const projectId = process.env.FIREBASE_PROJECT_ID ?? "";
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL ?? "";
    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY ?? "";
    const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

    if (!projectId || !clientEmail || !privateKeyRaw) {
      throw new Error("Missing required Firebase environment variables");
    }

    try {
      initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
      console.log("Firebase Admin SDK initialized successfully");
    } catch (error) {
      console.error("Failed to initialize Firebase Admin SDK:", error);
      throw error;
    }
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
