import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCb_gaT2wxEFNQSviATM3mmg9gkNF85qWU",
//   authDomain: "zuppagcs.firebaseapp.com",
//   projectId: "zuppagcs",
//   storageBucket: "zuppagcs.appspot.com",
//   messagingSenderId: "18369303417",
//   appId: "1:18369303417:web:2fcce62e53b8aced4315a8",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDW7v6Yd98INBab1iionCfSgVgyTeoQ_20",
  authDomain: "meta-glazing-388812.firebaseapp.com",
  projectId: "meta-glazing-388812",
  storageBucket: "meta-glazing-388812.appspot.com",
  messagingSenderId: "796688891913",
  appId: "1:796688891913:web:fcaad55a98e2fb2cd278d8",
};

const app = initializeApp(firebaseConfig, {
  persistance: getReactNativePersistence(AsyncStorage),
});

export { app };
