import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "./firebase_initialize";
import { resolveUri } from "expo-asset/build/AssetSources";

const AuthContext = createContext();
export const AuthContextProvider = ( { children } ) => {
    const GoogleSignIn = () => {
        const provider = GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    const SignOut = () => {
        signOut(auth);
    }

    return(
        <AuthContext.Provider value={ { GoogleLogIn, SignOut, User } }>
            { children }
        </AuthContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext( AuthContext );
}

export default GoogleSignIn;