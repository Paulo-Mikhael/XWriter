import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export const emailDomains: string[] = [
  "@gmail.com",
  "@outlook.com",
  "@hotmail.com",
  "@yahoo.com",
  "@icloud.com",
  "@aol.com",
  "@protonmail.com",
  "@yandex.com",
  "@mail.com",
  "@gmx.com",
  "@zoho.com",
  "@live.com",
  "@rediffmail.com",
  "@inbox.com",
  "@mail.ru",
  "@ymail.com",
];
export const specialCharacters: string[] = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\"", "'", "<", ">", ".",
  "?", "/", "~", "`",
];
export const upperLetters: string[] = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
export const numerals: string[] = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];
const firebaseCredentials = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
const initializeFirebase = initializeApp(firebaseCredentials);
export const firebaseAuth = getAuth(initializeFirebase);
export const firebaseRealtimeDatabase = getDatabase(initializeFirebase);