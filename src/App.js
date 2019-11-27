// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './App.css'
import Routes from './Routes'
// import SignIn from './SignIn';
// import SignUp from "./SignUp";
// import FirstPage from "./FirstPage";

const App = () => {
    const fade = useSpring({
        from: {
            opacity: 0
        },
        opacity: 1
    })
    return (
        <header className="App-header">
        <animated.div className="App" style={fade}>
            <Routes />
            {/*<SignIn/>*/}
            {/*<SignUp/>*/}
            {/*<FirstPage/>*/}
        </animated.div>
            </header>
    )
}
export default App
