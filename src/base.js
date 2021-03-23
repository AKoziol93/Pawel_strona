import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1W_hSQBknMkTnZVoAUtOqAl2_P9cpmdc",
    authDomain: "portfolio-pawel-koziol.firebaseapp.com",
    databaseURL: "https://portfolio-pawel-koziol-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());


export { firebaseApp };
export default base;