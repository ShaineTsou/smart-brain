import React, { Component } from 'react';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ 'signInEmail': event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ 'signInPassword': event.target.value })
    }
    onSubmitSignIn = () => {
        fetch('https://limitless-bayou-37873.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) { // Does the user exit? Did we receive a user with a property of id?
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return(
            <article className='br3 shadow-2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center'>
                <main className='pa4 black-80'>
                    <div className='measure'>
                        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                            <legend className='center f2 fw6 ph0 mh0'>Sign In</legend>
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
                        <div className='lh-copy mt3'>
                            <p href='#0' className='f5 link dim black db pointer' onClick={() => onRouteChange('register')} >Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;