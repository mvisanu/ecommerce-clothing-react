import firebase from "./firebase/firebase.utils";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("9LIzKixkxmhnIw3BYLCb")
  .collection("cartItems")
  .doc("YMZ4Ya5ORUkl0AiIylwx");

firestore.doc('/users/9LIzKixkxmhnIw3BYLCb/cartItems/YMZ4Ya5ORUkl0AiIylwx');
  
firestore.collection('/users/9LIzKixkxmhnIw3BYLCb/cartItems');