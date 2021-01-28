import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imgUrl, box}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt3'>
                <img id='inputimage' src={imgUrl} alt='' width='550px' height='auto' className='shadow-4' />
                <div className='bounding-box' style={{top: box.top, right: box.right, bottom: box.bottom, left: box.left}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;