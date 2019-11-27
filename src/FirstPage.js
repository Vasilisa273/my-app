import React, { Component } from 'react';

class FirstPage extends Component {

    render() {
        return (
            <form action="http://localhost:3000/register/">
                <button
                    className = "button_up">
                    Sign up
                </button>
                <form action="http://localhost:3000/login/">
            <button className = "button_in">
                    Sign in
                </button>
            </form>
            </form>


        )
    }
}
export default FirstPage;