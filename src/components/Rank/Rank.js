import React from 'react';

const Rank = ({name, entries}) => {
    return(
        <div>
            <div className='f3 white-70'>
                <strong className='f2'><em>{name}</em></strong>
                {`, your current entry count is ...`}
            </div>
            <div className='f1 fw6 white'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;