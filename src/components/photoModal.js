import React from 'react';

import Photo from "./Photo";
import useFetch from "../hooks/useFetch";
import {photosUrl} from "../API/Api";


function PhotoModal({id, userId, title, showPhotoModal, closePhotoModal }) {

    const [data] = useFetch(photosUrl)

    return showPhotoModal ? (
        <>
            {<div className="photo-modal" onClick={closePhotoModal}>
                <div className="photo-modal-content" onClick={e => {
                    e.stopPropagation();
                }}>
                    <span className="close" onClick={closePhotoModal}>&times;</span>
                    { data.map(item => (userId === item.id) ?  <Photo key={item.id} url={item.url} title={item.title}/> : null
                    )}
                </div>
            </div>}

        </>
    ) : null;
}

export default PhotoModal;