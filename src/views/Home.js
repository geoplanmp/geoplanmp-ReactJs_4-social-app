import './Home.css';

import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import AddPost from '../components/AddPost';


const Home = (props) => {

    const [posts, setPosts] = useState([]);
    
    const getLatestPosts = () => {
        axios.post("https://akademia108.pl/api/social-app/post/latest")
        .then((req)=>{
            setPosts(req.data);
            console.log(req);
        })
        .catch ((error) => {
            console.error(error);
        });
    };

    const getNextPosts = () => {
        axios.post("https://akademia108.pl/api/social-app/post/older-then", {
            date: posts[posts.length - 1].created_at
        })        
        .then((res)=>{
            setPosts(posts.concat(res.data));
        })
        .catch ((error) => {
            console.error(error);
        });
    };

    const getPrevPosts = () => {
        axios.post("https://akademia108.pl/api/social-app/post/newer-then", {
            date: posts[0].created_at
        })        
        .then((res)=>{
            setPosts(res.data.concat(posts));
            console.log(res);
        })
        .catch ((error) => {
            console.error(error);
        });
    };

    const removePost = (postID) => {
        // console.log(postID);
        setPosts(posts.filter(post => 
            post.id !== postID))
        
    }

    useEffect(()=>{
        getLatestPosts();
    },[props.user]);

    console.log(posts);
    return (
        <div className="home">
            <AddPost getPrevPosts={getPrevPosts}/>                       
            <div className="postList">            
                {posts.map((post) => {
                     return <Post post={post} key={post.id} removePost = {removePost}/>               
                })}                 
                <button className ="btn loadMore" onClick={getNextPosts}>Load more</button>                
            </div>           
        </div>    
    );
};

export default Home;