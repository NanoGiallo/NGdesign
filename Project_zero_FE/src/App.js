import React, { Suspense } from 'react';
import { Routes, Route  } from 'react-router-dom';
import Homepage from './Component/Pages/Homepage';
import Info from './Component/Pages/Info';
import { AuthorizationContext } from './Context/AuthorizationContext';
import { AuthorizationFunction } from './Context/AuthorizationFunction';
import Navigation from './Component/Assets/Navigation';

const Login = React.lazy(() => import('./Component/Pages/Login'));
const Mercatino = React.lazy(() => import('./Component/Pages/Mercatino'));
const Eventi = React.lazy(() => import('./Component/Pages/Eventi'));
// test
export default function App(){
    const { token, loginIN, loginOUT, userID } = AuthorizationFunction();

    return (
        <AuthorizationContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userID,
                loginIN: loginIN,
                loginOUT: loginOUT
            }}
        >
            <Navigation/>
            <main>
                <Suspense fallback={<div>Loading...</div>}> 
                    <Routes>
                        <Route path="/info" exact element={<Info/>}/>
                        <Route path="/login" exact element={<Login/>}/>
                        <Route path="/mercatino" exact element={<Mercatino/>}/>
                        <Route path="/eventi" exact element={<Eventi/>}/>
                        <Route path="/" exact element={<Homepage/>}/>
                        
                        {/* <Route path="/auth">
                            <Auth />
                        </Route> */}
                    </Routes>
                </Suspense>
            </main>
        </AuthorizationContext.Provider>
    )
}