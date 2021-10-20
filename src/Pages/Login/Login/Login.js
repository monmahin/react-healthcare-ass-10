import React from 'react';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import logo from '../Login/logo/log.png'
import { Link } from 'react-router-dom';
const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    const { signInGoogle,user,handleRegistration,handleNameChange,emailChange,passwordChange} = useAuth();
    const handleGoogleLogin = () => {
        signInGoogle()
            .then(result => {
            history.push(redirect_url)
        })
            
    }
    return (
        <div >
          <h1>Contact with us</h1>
          <div className="contact-form p-3">
            <div className="row  d-flex justify-content-center ">
              <div onSubmit={handleRegistration} className="col-md-6 mt-5">
                <input onBlur={handleNameChange}
                  className="input-field"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <br />
                <input onBlur={emailChange}
                  className="input-field"
                  type="Email"
                  placeholder="Enter Your Email"
                />
                <br />
                <input onBlur={passwordChange}
                  className="input-field"
                  type="password"
                  placeholder="Enter Your password"
                />
                <br />
                
                        <input className="input-button" type="submit" value="Submit" />
                        <br />
                        <br />
                        <p>Are you new? please <Link to="/register">register</Link>.</p>
                        
                        <button onClick={handleGoogleLogin} className="btn btn-primary  w-50">Google Sign In</button>
                        
              </div>
              <div className="col-md-6">
                <div className="contact-im">
                  <img
                    className="w-100"
                    src={logo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Login;


/* 
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
*/


