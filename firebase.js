// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb_gaT2wxEFNQSviATM3mmg9gkNF85qWU",
  authDomain: "zuppagcs.firebaseapp.com",
  projectId: "zuppagcs",
  storageBucket: "zuppagcs.appspot.com",
  messagingSenderId: "18369303417",
  appId: "1:18369303417:web:2fcce62e53b8aced4315a8"
};
let app;
if(firebase.app.length===0)
{
    app = firebase.initializeApp(firebaseConfig);
}
else
{
    app=firebase.app;
}
const auth=firebase.auth();
export {auth};