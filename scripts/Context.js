import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";


import { signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./Firebase";
import { auth2 } from "./Firebase";

import { db } from "./Firebase";

const AuthContext = createContext();

var a;

export const AuthContextProvider = ( { children } ) => {
    const[ User, setUser ] = useState();

    const [ UserID, SetUserID ] = useState();

    const GoogleLogIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup( auth, provider )
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)

            console.log( user.uid );

            a = user.uid;

            console.log( user.uid );

            localStorage.setItem( "UserID", user.uid );
            localStorage.setItem( "UserName", user.displayName );
            localStorage.setItem( "UserEmail", user.email );

            // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      
    }


    const SignOut = () => {
        signOut( auth );
    }
  
    useEffect(() => {
      const unsub = onAuthStateChanged( auth, ( currentUser ) => {
        setUser( currentUser );
        console.log( 'User', currentUser )
      } );
      
      return () => {
        unsub();
      };
    }, []);

    return(
        <AuthContext.Provider value={ { GoogleLogIn, SignOut, User } }>
            { children }
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext( AuthContext );
}

export { a };