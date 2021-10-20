import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(()=> {
            setUser("");
        })
    }
    
    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
        })
    },[]);

    // email and password
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if(!/(?=.*[!@#$&*])/.test(password)){
            setError('Password contain at least one special character.');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            setUserName();
            setError("");
        })
        .catch(error => {
            setError(error.message);
        });

    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => { })
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            setError("");
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return {
        user,
        signInUsingGoogle,
        signInUsingGithub,
        logOut,
        error,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleSignIn,
    }
}
export default useFirebase;