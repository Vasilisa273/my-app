import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './App.css'
import Routes from './Routes'

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
        </animated.div>
        </header>
    )
}
export default App
