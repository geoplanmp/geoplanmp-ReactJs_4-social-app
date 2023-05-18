import axios from 'axios';
import './DeletePost.css';

const DeletePost = (props) => {
    
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
            <button className="btn deleteBtn" onClick = {() => deletePost(props.postId)}>Delete</button>
        </div>
    );
};

export default DeletePost;