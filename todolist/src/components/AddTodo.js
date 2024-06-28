import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
import React from "react";
function AddTodo() {
    const [title,setTitle] = React.useState('');

    const handleSubmit = async(element) => {
        element.preventDefault();
        if (title !== '') {
            await addDoc(collection(db,"todo"),{
                title,
                completed : false,
            });
            setTitle('');
        }
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input_container">
                    <input 
                        type="text"
                        placeholder="Add Todo"
                        value={title}
                        onChange={(element) => setTitle(element.target.value)}
                    />
                </div>
                <div className="btn-container">
                    <button>Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;