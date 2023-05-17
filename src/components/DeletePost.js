import axios from 'axios';
import './DeletePost.css';

const DeletePost = (props) => {
    
    const deletePost = (event) => {
        event.preventDefault();

        axios.post("https://akademia108.pl/api/social-app/post/delete", {
            post_id: props.postId
        })
        .then((req)=>{
            console.log(req);
            // props.getPrevPosts();
            // setPostContent("");
            props.removePost(req.data.post_id);
            
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