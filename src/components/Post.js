import './Post.css'

import { useState } from "react";

import AddPost from './AddPost';

const Post = (props) => {

    const [postContent, setPostContent] = useState(null);
    
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
            {/* <AddPost getTextArea={getTextArea}/>            */}
            {/* {setPostContent = {setPostContent}} */}
            
        </div>
        
    );
}

export default Post