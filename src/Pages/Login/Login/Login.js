import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import logo from '../Login/logo/man.png'
const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    const { signInGoogle, user } = useAuth();
    const handleGoogleLogin = () => {
        signInGoogle()
            .then(result => {
            history.push(redirect_url)
        })
            
    }
    return (
        
        <form style={{marginTop:'50px'}} >
            <h2>Please Sign In</h2>
            <h2>{user.email}</h2>
            <br />
            <img src={logo} alt="" />
            <br /><br />
            <label forhtml="email"><b>Email</b></label>
                    <br />
            <input type="text" placeholder="Enter Email" name="email" id="email" required />
            <br /><br />
            <label forhtml="psw"><b>Password</b></label>
                    <br />
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
            <br />
            <br />
            <button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign In</button>

        </form>
    );
};

export default Login;