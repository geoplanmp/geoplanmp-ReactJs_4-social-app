import './Post.css'

import { useState } from "react";
import DeletePost from './DeletePost';

const Post = (props) => {

 const [likesCount, setLikesCount] = useState(props.post.likes.length);

    return (
        <div className="post">
            <div className="avatar">
                <img src={props.post.user.avatar_url} alt={props.post.user.username}></img>
            </div>
            <div className="postData">
                <div className="postMeta">
                    <div className="author">{props.post.user.username}</div>
                    <div className="date">{props.post.user.created_at.substring(0, 10)}</div>                    
                </div>
                <div className="postContent">{props.post.content}</div>
                <div className="likes">{likesCount}</div>
            </div>
            <DeletePost postId={props.post.id} removePost = {props.removePost}/>            
        </div>
        
    );
}

export default Post