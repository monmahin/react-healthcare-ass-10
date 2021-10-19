import initialAuth from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
initialAuth();

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [loading,setLoading]=useState(true)
  

    const signInGoogle = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
            // .then(result => setUser(result.user))
            // .finally(() => setLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false))
    }

    return { signInGoogle,user,logOut ,loading};
};
export default useFirebase