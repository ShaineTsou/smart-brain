import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return(
        <div>
            <p className='f3 white-70'>
                {'Smart Brain will detect faces in your pictures. Give it a shot!'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-4'>
                    <input 
                        className='f4 pa2 w-70 center br2' 
                        type='text' 
                        placeholder='Put image link here to detect faces' 
                        onChange={ onInputChange }
                    />
                    <button 
                        onClick={ onPictureSubmit } 
                        className='link dib w-30 ph3 pv2 br2 grow f4 dark-blue bg-gold fw8'
                    >DETECT</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;