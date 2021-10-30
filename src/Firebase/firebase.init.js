import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAppAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAppAuthentication;