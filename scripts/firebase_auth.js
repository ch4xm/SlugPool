import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "./firebase_initialize";

const AuthContext = createContext();

const GoogleSignIn = () => {
    const signInWithGoogle = async () => {
      try {
        const { idToken } = await firebase.auth().signInWithPopup('google');
        console.log('Google Sign In Success', idToken);
      } catch (error) {
        console.error('Google Sign In Error', error);
      }
    };
  
    return (
      <Button title="Sign In with Google" onPress={signInWithGoogle} />
    );
  };

export default GoogleSignIn;