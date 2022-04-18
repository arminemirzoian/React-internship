import React, {useState} from 'react';
import "./AddUser.css";
import AddIcon from '@mui/icons-material/Add';

function AddUser({onAdd}) {

    const [isAdded, setIsAdded] = useState(false);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value, e.target.email.value, e.target.website.value);
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.website.value = '';
        showForm();
    }

    const showForm = () => {
        setIsAdded(!isAdded);
    }
    return (
        <div>
            {isAdded ? (
                <div><h3 onClick={showForm}>Add user <AddIcon className='addIcon'/></h3>
                    <form className='addForm' onSubmit={handleOnSubmit}>
                        <input placeholder='Name' name='name'/>
                        <input placeholder='Email' name='email'/>
                        <input placeholder='Website' name='website'/>
                        <button className="addButton" onSubmit={handleOnSubmit}>Add</button>
                    </form>
                </div>) : (<h3 onClick={showForm}>Add user <AddIcon className='addIcon'/></h3>)}
        </div>
    );
}

export default AddUser;