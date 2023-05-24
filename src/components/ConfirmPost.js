import React from "react";
import './ConfirmPost.css'


const ConfirmPost = (props) => {

  return (
      <div className="popup-container">
       <div className="popup-body">
       <h2>Are you sure you want delete post?</h2>
        <button className ='btn btn-green' onClick={() => props.deletePost(props.postId)}>Yes</button>
        <button className ='btn btn-red' onClick={() => props.setdeleteModalDisplay(false)}>No</button>
       </div>
      </div>
    );
  };

  export default ConfirmPost

  