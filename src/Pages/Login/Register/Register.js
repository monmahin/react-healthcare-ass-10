import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <form>
    <div className="container">
    <h1 className="text-primary">Register</h1>
    <p>Please Register in this form.</p>
   
                <div className="text-primary">
                    
                <label forhtml="email"><b>Email</b></label>
                    <br />
    <input type="text" placeholder="Enter Email" name="email" id="email" required />
<br />
                    <label forhtml="psw"><b>Password</b></label>
                    <br />
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
<br />
                    <label forhtml="psw-repeat"><b>Repeat Password</b></label>
                    <br />
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
</div>
     
     {/* <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p> */}
<br />
   <button type="submit" className="btn btn-primary">Sign Up</button>
   <br />                 
   <br />                 
    </div>
                
       <div >
                <p>Already have an account? <Link to="/login">Login</Link>.</p>
                
            </div>
            <div>
            <p> ...........................<b>Or</b>.............................</p>
                
                <button type="submit" className="btn btn-primary"> Google Sign In</button>
            </div>
            <br />
            <br />
            <br />
</form>
    );
};

export default Register;