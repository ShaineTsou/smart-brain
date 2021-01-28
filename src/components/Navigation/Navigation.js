import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f4 link dim washed-green ph3 pv1 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('register')} className='f4 link dim washed-green ph3 pv1 pointer'>Register</p>
                <p onClick={() => onRouteChange('signin')} className='f4 link dim washed-green ph3 pv1 pointer'>Sign In</p>
            </nav>
        );
    }
}

export default Navigation;