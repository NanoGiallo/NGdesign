import { createContext } from 'react';

export const AuthorizationContext = createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    loginIN: () => {},
    loginOUT: () => {}
});
