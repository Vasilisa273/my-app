import React, { useContext, useEffect, useState } from 'react'
import SignIn from './SignIn';
import SignUp from "./SignUp";
import FirstPage from "./FirstPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    __RouterContext
} from 'react-router-dom'
import {animated, useTransition } from 'react-spring'

function useRouter() {
    return useContext(__RouterContext)
}

const Main = () => {
    const { location } = useRouter()

    const transitions = useTransition(location, location => location.key, {
        // from: {
        //     opacity: 0,
        //     position: 'absolute',
        //     width: '100%',
        //     transform: `translate3d(100%, 0, 0)`
        // },
        // enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        // leave: {
        //     opacity: 0,
        //     transform: `translate3d(-50%, 0, 0)`
        // }
    })

    return transitions.map(({ item, props: transition, key }) => (
        <animated.div key={key} style={transition}>
            <Switch location={item}>
                <Route exact path="/" component={FirstPage} />
                <Route path="/register" component={SignUp} />
                <Route path="/login" component={SignIn} />
                {/*<Redirect from="*" to="/" />*/}
            </Switch>
        </animated.div>
    ))
}

const Routes = () => {
    return (
        <Router>
            {/*<ul className="router-nav">*/}
            {/*    <NavLink to="/">FirstPage</NavLink>*/}
            {/*    <NavLink to="/register">SignUp</NavLink>*/}
            {/*    <NavLink to="/login">SignIn</NavLink>*/}
            {/*</ul>*/}
            <Main />
        </Router>
    )
}

export default Routes
