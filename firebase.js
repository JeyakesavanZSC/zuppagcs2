import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCb_gaT2wxEFNQSviATM3mmg9gkNF85qWU",
  authDomain: "zuppagcs.firebaseapp.com",
  projectId: "zuppagcs",
  storageBucket: "zuppagcs.appspot.com",
  messagingSenderId: "18369303417",
  appId: "1:18369303417:web:2fcce62e53b8aced4315a8",
};

const app = initializeApp(firebaseConfig, {
  persistance: getReactNativePersistence(AsyncStorage),
});

export { app };
