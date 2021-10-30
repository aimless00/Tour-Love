import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAppAuthentication from "../Firebase/firebase.init";

const provider = new GoogleAuthProvider();
initializeAppAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const handleGoogleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)

    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
            setIsLoading(false)

        });
    }, [])

    return {
        handleGoogleSignIn,
        setUser,
        user,
        setIsLoading,
        logOut,
        isLoading
    }


}
export default useFirebase;