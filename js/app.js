// Step 1: connection check only. No auth, no Firestore reads/writes.
// This just confirms the SDK initialized and the services are reachable
// client-side. Real data access begins in later steps, gated by
// Firestore Security Rules.

import { app, auth, db } from "./firebase-init.js";

const appStatusEl = document.getElementById("status-app");
const authStatusEl = document.getElementById("status-auth");
const firestoreStatusEl = document.getElementById("status-firestore");

function setStatus(el, ok, label) {
  el.textContent = label;
  el.className = ok ? "ok" : "error";
}

try {
  if (app) {
    setStatus(appStatusEl, true, "Initialized");
  }
} catch (err) {
  setStatus(appStatusEl, false, "Failed");
  console.error("Firebase app init error:", err);
}

try {
  if (auth) {
    setStatus(authStatusEl, true, "Service ready");
  }
} catch (err) {
  setStatus(authStatusEl, false, "Failed");
  console.error("Auth init error:", err);
}

try {
  if (db) {
    setStatus(firestoreStatusEl, true, "Service ready");
  }
} catch (err) {
  setStatus(firestoreStatusEl, false, "Failed");
  console.error("Firestore init error:", err);
}
