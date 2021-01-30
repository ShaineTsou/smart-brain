import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('https://limitless-bayou-37873.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    
    render() {
        return(
            <article className='br3 shadow-2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center'>
                <main className='pa4 black-80'>
                    <div className='measure'>
                        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                            <legend className='center f2 fw6 ph0 mh0'>Register</legend>
                            <div className='mt3'>
                                <label className='db fw6 lh-copy f4' htmlFor='name'>Name</label>
                                <input 
                                    className='pa2 br2 b--black input-reset ba bg-transparent hover-bg-black hover-white w-100' 
                                    type='text' 
                                    name='name'  
                                    id='name' 
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className='mt3'>
                                <label className='db fw6 lh-copy f4' htmlFor='email-address'>Email</label>
                                <input 
                                    className='pa2 br2 b--black input-reset ba bg-transparent hover-bg-black hover-white w-100' 
                                    type='email' 
                                    name='email-address'  
                                    id='email-address' 
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className='mv3'>
                                <label className='db fw6 lh-copy f4' htmlFor='password'>Password</label>
                                <input 
                                    className='b br2 b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' 
                                    type='password' 
                                    name='password'  
                                    id='password' 
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className=''>
                            <input 
                                className='b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib' 
                                type='submit' 
                                value='Sign in' 
                                onClick={this.onSubmitSignIn} 
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;