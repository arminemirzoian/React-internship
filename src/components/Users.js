import React, {useState} from 'react';
import Modal from "./Modal";

function Users({name, id1}) {
    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true)
    }

    function closeModal() {
        setShowModal(false)
    }

    return (
        <div className="app-wrapper">
            <li onClick={openModal}>
                {name}
            </li>
            <Modal
                name={name}
                id1={id1}
                showModal={showModal}
                openModal={openModal}
                closeModal={closeModal}/>
        </div>
    );
}

export default Users;