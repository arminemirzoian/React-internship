import React, {useState} from 'react';
import PhotoModal from "./photoModal";

function Photos({userId, title}) {

    const [showPhotoModal, setShowPhotoModal] = useState(false)

    function openPhotoModal() {
        setShowPhotoModal(true)
    }

    function closePhotoModal() {
        setShowPhotoModal(false)
    }

    return (

        <div className="photo-container">
            <div className="photo-container-content" onClick={openPhotoModal}>
                <div style={{fontFamily: "Georgia"}}> {title} </div>
            </div>
            <PhotoModal
                title={title}
                userId={userId}
                showPhotoModal={showPhotoModal}
                openPhotoModal={openPhotoModal}
                closePhotoModal={closePhotoModal}/>
        </div>
    );
}

export default Photos;