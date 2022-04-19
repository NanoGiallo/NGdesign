import React, { useContext} from 'react';
import { Link  } from 'react-router-dom';
import { AuthorizationContext } from '../../Context/AuthorizationContext';
import classes from '../Css/Navigation.module.css';

export default function Navigation(){
    const Auth = useContext(AuthorizationContext)

    return (
        <header className={classes.header}>
            <span className={classes.title}><Link to="/">Pordeno-NIX</Link></span>
            <ul>
                <li><Link to="/info">Info</Link></li> |
                <li><Link to="/login">{Auth.isLoggedIn ? 'Login' : 'Registrati'}</Link></li> |
                <li><Link to="/mercatino">Mercatino</Link></li> |
                <li><Link to="/eventi">Eventi</Link></li>
            </ul>
        </header>
    )
}