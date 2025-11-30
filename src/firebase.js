import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAQerM_oGYdej3nC9Vgisfgi0zpJQyemU",
  authDomain: "pk-store-d1a81.firebaseapp.com",
  projectId: "pk-store-d1a81",
  storageBucket: "pk-store-d1a81.appspot.com",  
  messagingSenderId: "238211412964",
  appId: "1:238211412964:web:c2b23903b73220e11b0df1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
