import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

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
                <div>
                {/*<input className = "input_email"*/}
                {/*    type="text"*/}
                {/*    placeholder="E-mail"*/}
                {/*    value={this.state.email}*/}
                {/*    onChange={this.onChangeEmail}/>*/}

                    <TextField
                        className = "input_email"
                        id="standard-E-mail-input"
                        label="E-mail"
                        type="E-mail"
                        autoComplete="current-E-mail"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={this.onChangeEmail}/>

                    {/*<input className = "input_password"*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Password"*/}
                    {/*    value={this.state.password}*/}
                    {/*    onChange={this.onChangePassword}/>*/}
                </div>
                <div>
                    <TextField
                        className = "input_password"
                        id="standard-Password-input"
                        label="Password"
                        type="Password"
                        autoComplete="current-Password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}/>
                </div>
            <form>
                <button type="submit">
                    Sign in
                </button>
            </form>
            </form>

        );
    }
}

export default SignIn;
