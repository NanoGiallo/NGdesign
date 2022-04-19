import React, { useContext } from 'react';
import { AuthorizationContext } from '../../Context/AuthorizationContext';

export default function Login(){
    const Auth = useContext(AuthorizationContext)

    return (
        <React.Fragment>
            <h1>Login</h1>
            <span> </span>
            <button onClick={Auth.loginIN}>IN</button>
            <button onClick={Auth.loginOUT}>OUT</button>
            <button onClick={()=> { console.log('test'); fetch('http://localhost:5000/api/')}}>FETCH</button>
        </React.Fragment>
    )
}