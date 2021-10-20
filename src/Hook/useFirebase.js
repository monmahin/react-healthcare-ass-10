import initialAuth from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendEmailVerification,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
initialAuth();

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [loading,setLoading]=useState(true)
    const [name,setName]=useState('')
    const [email,setEmail]= useState('')
  const   [password,setPassword]=useState('')
  const [errors, setErrors] = useState('')
  const [isLogin,setIsLogin]=useState(false)

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

    const handleNameChange = e => {
        setName(e.target.value)
      }
    
      const emailChange = e => {
        setEmail(e.target.value)
      }
      const passwordChange = e => {
        setPassword(e.target.value)
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          console.log(result.user)
          setErrors('')
        })
        
      .catch((error) => {
      setErrors(error.message);
      // ..
    });
      }

    const handleRegistration = e => {
        e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
          setErrors('Password Must be atleast  6 characters long.')
          return
        }
    
        if (!/(?=.*[!@#$&*])/.test(password)) {
          setErrors('Ensure Password  Must be 1 Special character string.')
          return
        }
       
        isLogin? processLogin(email, password):registerNewUser(email, password)
    }
    
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            console.log(result.user)
            setErrors('')
            verifyEmail()
            setUserName()
          })
          
        .catch((error) => {
        setErrors(error.message);
        
      });
      }
    
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(result => { })
      }
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(user => {
          console.log(user)
        })
      }

    return { signInGoogle,user,logOut ,loading,handleRegistration,handleNameChange,emailChange,passwordChange};
};
export default useFirebase

/* 
import {getAuth, signInWithPopup, GoogleAuthProvider ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,updateProfile} from "firebase/auth";
import { useState } from "react";
import './App.css';
import initialAuthentication from './Firebase/firebase.initialize';



initialAuthentication()

const googleProvider = new GoogleAuthProvider();

function App() {
  const [name,setName]=useState('')
  const [email,setEmail]= useState('')
const [password,setPassword]=useState('')
  const [errors, setErrors] = useState('')
  const [isLogin,setIsLogin]=useState(false)

  const auth = getAuth();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result=>console.log(result.user))
  }



  const loginToggle = e => {
  setIsLogin(e.target.checked)
  }
  const handleNameChange = e => {
    setName(e.target.value)
  }

  const emailChange = e => {
    setEmail(e.target.value)
  }
  const passwordChange = e => {
    setPassword(e.target.value)
  }
  

  const handleRegistration = e => {
    e.preventDefault()
    console.log(email, password)
    if (password.length < 6) {
      setErrors('Password Must be atleast  6 characters long.')
      return
    }

    if (!/(?=.*[!@#$&*])/.test(password)) {
      setErrors('Ensure Password  Must be 1 Special character string.')
      return
    }
   
    isLogin? processLogin(email, password):registerNewUser(email, password)
  }

  //sign in email

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user)
      setErrors('')
    })
    
  .catch((error) => {
  setErrors(error.message);
  // ..
});
  }

  

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user)
        setErrors('')
        verifyEmail()
        setUserName()
      })
      
    .catch((error) => {
    setErrors(error.message);
    
  });
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
    .then(result => { })
  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(user => {
      console.log(user)
    })
  }
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then(result => { })
  }
 

  return (
    <div className="container my-5 w-50">
      <form onSubmit={handleRegistration}>
        <h3 className="text-center ms-5 my-3 text-primary fw-bold">
          Please {isLogin ? 'Login' : 'Register'}</h3>
        
        {!isLogin &&  <div className="row mb-3">
       <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
       <div className="col-sm-10">
         <input onBlur={handleNameChange} type="name" placeholder="Your Name" className="form-control" id="inputName"/>
       </div>
     </div>      
  }
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={emailChange} type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={passwordChange} type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={loginToggle} className="form-check-input" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label" htmlFor="gridCheck1">
                Already registered ?
        </label>
      </div>
    </div>
        </div>
        <div className="mb-3 text-danger">{errors}</div>
        <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
        <button type="button" className="btn btn-dark ms-5" onClick={resetPassword}>Reset</button>
</form>



      <div><br /><br /><br /><br /><br /></div>
      
      <button onClick={googleSignIn}>Sign In</button>
      
      
    </div>
  );
}

export default App;

*/