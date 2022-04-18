import React, {useState} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function EditedUsers({id, name, email, website, onEdit, onDelete}) {
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    const handleOnEditSubmit = (evt) => {
        evt.preventDefault();
        onEdit(id, evt.target.name.value, evt.target.email.value, evt.target.website.value);
        setIsEdit(!isEdit);
    };

    return (
        <div>
            {isEdit ? (
                <form className='editForm' onSubmit={handleOnEditSubmit}>
                    <input placeholder="Name" name="name" defaultValue={name}/>
                    <input placeholder="Email" name="email" defaultValue={email}/>
                    <input placeholder="Website" name="website" defaultValue={website}/>
                    <button className="saveButton" onSubmit={handleOnEditSubmit}>Save</button>
                </form>
            ) : (
                <div className='editedUsers'>
                    <div><span>{name}</span></div>
                    <div><span>{email}</span></div>
                    <div><span>{website}</span></div>
                    <div className='editIcons'>
                        <span className='editIcon' onClick={handleEdit}>Edit <EditIcon className='icon'/></span>
                        <span
                            className='deleteIcon' onClick={handleDelete}> Delete<DeleteIcon className='icon'/></span>
                    </div>
                </div>)}
        </div>
    );
}

export default EditedUsers;
