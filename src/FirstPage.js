import React, { Component } from 'react';

class FirstPage extends Component {

    render() {
        return (
            <form>
                <button
                    className = "button_up">
                    Sign up
                </button>
                <button className = "button_in">
                    Sign in
                </button>
            </form>
        )
    }
}
export default FirstPage;