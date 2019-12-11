import React, { Component } from 'react';

class FirstPage extends Component {

    render() {
        return (
            <form action="http://localhost:3000/register/">
                <button
                    type="submit">
                    Sign up
                </button>
                <form action="http://localhost:3000/login/">
            <button type="submit">
                    Sign in
                </button>
            </form>
            </form>
        )
    }
}

export default FirstPage;
