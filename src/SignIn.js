import React, { Component } from 'react';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        alert(`${this.state.email}, добро пожаловать!`);
        event.preventDefault();
    }

    onChangePassword(event){
        this.setState({password: event.target.value});
    }

    onChangeEmail(event) {
        this.setState({email: event.target.value});

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className = "input_email"
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.onChangeEmail}/>
                <input className = "input_password"
                    type="text"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChangePassword}/>
                <button className = "button_in">
                    Sign in
                </button>
            </form>

        );
    }
}

export default SignIn;