import axios from 'axios';
import './DeletePost.css';
import { useState } from 'react';
import ConfirmPost from './ConfirmPost';


const DeletePost = (props) => {
    
    const [deleteModalDisplay, setdeleteModalDisplay] = useState(false);

    
    const deletePost = (id) => {          
                
        axios.post("https://akademia108.pl/api/social-app/post/delete", {
            post_id: id
        })
        .then((req)=>{
            console.log(req);
            props.removePost(req.data.post_id);            
        })

        .catch ((error) => {
            console.error(error);
        });                               
    }
        
    return (
        <div className="deletePost">
            <button className="btn deleteBtn" onClick = {() => setdeleteModalDisplay(true)}>Delete</button>            
            {deleteModalDisplay && <ConfirmPost postId={props.postId} deletePost={deletePost} setdeleteModalDisplay={setdeleteModalDisplay}/>}
        </div>
    );
};

export default DeletePost;