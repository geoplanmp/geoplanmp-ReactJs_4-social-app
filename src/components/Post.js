import './Post.css'

import { useState } from "react";
import DeletePost from './DeletePost';
import axios from 'axios';


const Post = (props) => {

 const [likeCount, setLikeCount] = useState(props.post.likes.length);

 const [doesUserLiked, setDoesUserLiked] = useState(props.post.likes.filter(like=>like.username === props.user?.username).length !==0);
 
 const likePost = (id, isLiked) => {
    axios.post('https://akademia108.pl/api/social-app/post/'+ (isLiked ? 'dislike' : 'like'), {
        post_id: id
    }).then(()=>{
        setLikeCount(likeCount + (isLiked ? -1 : 1));
        setDoesUserLiked(!isLiked);
    })
 } 

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
                <div className="likes">
                    
                    
                    {props.user && (<button className='btn' onClick={() => likePost(props.post.id, doesUserLiked)}>{doesUserLiked ? "Dislike" : "Like"}</button>)}
                    
                    {likeCount}
                </div>
                {props.post.user.username===props.user?.username &&<DeletePost postId={props.post.id} removePost={props.removePost} />}
            </div>
              
            
                
                     
        </div>
        
    );
}

export default Post