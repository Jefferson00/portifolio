import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCs-qgrMKNYEdggOPxWpd0iAxs4Vfy3eQ",
  authDomain: "portifolio-65b2d.firebaseapp.com",
  projectId: "portifolio-65b2d",
  storageBucket: "portifolio-65b2d.appspot.com",
  messagingSenderId: "408361701317",
  appId: "1:408361701317:web:f5eac0befccef7d29585ac",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
