import { useState, useCallback, useEffect } from 'react';

export const AuthorizationFunction = () => {
    const [ token, setToken ] = useState(null)

    const loginIN = () => {
        console.log('LOGIN IN')
        setToken('ABCDEFG')
    }

    const loginOUT = () => {
        console.log('LOGIN OUT')
        setToken(null)
    }

    return { token: token, loginIN, loginOUT, userID: '007' }
}