import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";
const initialAuth = () => {
    initializeApp(firebaseConfig)
}
export default initialAuth