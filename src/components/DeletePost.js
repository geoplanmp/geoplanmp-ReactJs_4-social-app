import axios from 'axios';
import './DeletePost.css';

const DeletePost = () => {
    
    const deletePost = (event) => {
        event.preventDefault();

        axios.post("https://akademia108.pl/api/social-app/post/delete", {
            
        })
        .then((req)=>{
            console.log(req);
            // props.getPrevPosts();
            // setPostContent("");
            
        })
        .catch ((error) => {
            console.error(error);
        });                               
    }
    
    return (
        <div className="deletePost">
            <button className="btn deleteBtn" onClick = {(e) => deletePost(e)}>Delete</button>
        </div>
    );
};

export default DeletePost;