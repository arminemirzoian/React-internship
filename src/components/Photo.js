import React from 'react';

function Photo({url, title}) {
    return (
        <div>
            <div className='modal-photo'>
                <div className="photo-modal-title">
                    <h3> Photo title </h3>
                    <h4>{title}</h4>
                    <img src={url} alt={title}/>
                </div>
            </div>
        </div>
    );
}

export default Photo;