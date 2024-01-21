import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "./firebase_initialize";

const AuthContext = createContext();

const GoogleSignIn = () => {
    const provider = GoogleAuthProvider();
    signInWithPopup(auth, provider)
        
      
  };

export default GoogleSignIn;