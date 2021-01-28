import React from 'react';
import Tilt from 'react-tilt';
import brain from './magnifier-2.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br4 shadow-2" options={{ max : 35 }} style={{ height: 110, width: 110 }} >
                <div className="Tilt-inner pa3">
                    <img src={brain} alt='logo'/>
                </div>
            </Tilt>
            
            {/* <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </div>
    );
}


export default Logo;