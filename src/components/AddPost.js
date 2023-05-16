import axios from 'axios';
import './AddPost.css'
import { useState } from 'react';

const AddPost = (props) => {

    const [postContent, setPostContent] = useState("");
    
    const setNewPost = (event) => {
        event.preventDefault();

        if (!postContent) {
            return
        }

        axios.post("https://akademia108.pl/api/social-app/post/add", {
            content: postContent
        })
        .then((req)=>{
            console.log(req);
            props.getPrevPosts();
            setPostContent("");
            
        })
        .catch ((error) => {
            console.error(error);
        });                       
    }
       
   

    return (
        <div className="addPost">
            <form>
                <textarea className="textarea" onChange={(e) => setPostContent(e.target.value)} value={postContent}></textarea>
                <button className="btn addPostBtn" onClick={(event) => setNewPost(event)}>Add post</button>   
            </form>
        </div>
    )        
}

export default AddPost