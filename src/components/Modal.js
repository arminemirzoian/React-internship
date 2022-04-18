import React from 'react';
import useFetch from "../hooks/useFetch";
import {postsUrl} from "../API/Api";
function Modal({id1, name, showModal, closeModal}) {

    const [data] = useFetch(postsUrl)

    return showModal ? (
        <>
            {<div className="modal" onClick={closeModal}>
                <div className="modal-content" onClick={e => {
                    e.stopPropagation();
                }}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modal-title">Title: {name}</div>

                    {data.map(
                        item =>
                            (id1 === item.userId) ?
                                <div key={item.id} className='modal-post'>
                                    <p> . {item.title} </p>
                                </div> : null
                    )}

                </div>
            </div>}

        </>
    ) : null;
}

export default Modal;