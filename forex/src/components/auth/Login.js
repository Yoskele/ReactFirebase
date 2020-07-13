import React, { useState } from 'react';
import firebase from '../../firebase/config';
import { Redirect } from 'react-router-dom';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ routeRedirect, setRouteRedirect ] = useState(false);
 
    const loginForm = async(e) => {
        e.preventDefault();
        console.log('inside the form.')
        // call firebase Login in function from config.
        let response = await firebase.login(email, password);
       if(response.hasOwnProperty("message")){
           // if something goes wrong we will have a message.
           console.log(response.message);
        } else {
            setRouteRedirect(true)
        } 
    }
    // if we user exist we set the redirect state to true so we can redirect the user.
    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/admin" />
    }

    return(
        <React.Fragment>
            <form onSubmit={loginForm}>
             <h1> Please Login </h1>
             <label> Email: </label>
             <input type="email" name="email" onChange={ (e) => setEmail(e.target.value)} />
             <br></br>
             <label> Password: </label>
             <input type="password" name="password" onChange={ (e) => setPassword(e.target.value)} />
             <input type="submit" value="Login in" />
            </form>
        </React.Fragment>  
    )
}

export default Login;