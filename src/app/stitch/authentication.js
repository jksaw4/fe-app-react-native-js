import { AnonymousCredential } from "mongodb-stitch-browser-sdk";
import { app_client } from "./app.js";

export function loginAnonymous() {
  // Allow users to log in anonymously
  const credential = new AnonymousCredential();
  return app_client.auth.loginWithCredential(credential);
}

export function hasLoggedInUser() {
  // Check if there is currently a logged in user
  return app_client.auth.isLoggedIn;
}

export function getCurrentUser() {
  // Return the user object of the currently logged in user
  return app_client.auth.isLoggedIn ? app_client.auth.user : null;
}

export function logoutCurrentUser() {
  // Logout the currently logged in user
  const user = getCurrentUser();
  return app_client.auth.logoutUserWithId(user.id);
}