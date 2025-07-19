import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { requireEnv } from "@/lib/utils";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    const projectId = requireEnv("FIREBASE_PROJECT_ID");
    const clientEmail = requireEnv("FIREBASE_CLIENT_EMAIL");
    const privateKeyRaw = requireEnv("FIREBASE_PRIVATE_KEY");
    const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
