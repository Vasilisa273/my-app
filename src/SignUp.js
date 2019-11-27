import React, { Component } from 'react';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            lastname: '',
            password: ''
        };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
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

    onChangeName(event) {
        this.setState({name: event.target.value});
    }

    onChangeLastname(event) {
        this.setState({lastname: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className = "input_email"
                       type="text"
                       placeholder="E-mail"
                       value={this.state.email}
                       onChange={this.onChangeEmail}/>

                <input className = "input_name"
                       type="text"
                       placeholder="Name"
                       value={this.state.name}
                       onChange={this.onChangeName}/>

                <input className = "input_lastname"
                       type="text"
                       placeholder="Lastname"
                       value={this.state.lastname}
                       onChange={this.onChangeLastname}/>

                <input className = "input_password"
                       type="text"
                       placeholder="Password"
                       value={this.state.password}
                       onChange={this.onChangePassword}/>
                <button className = "button">
                    Save
                </button>
            </form>

        );
    }
}
export default SignUp;