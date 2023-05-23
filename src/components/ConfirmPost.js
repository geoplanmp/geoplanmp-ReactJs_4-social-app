import React from "react";


const ConfirmPost = (props) => {
    return (
      <div className="popup-container">
       <div className="popup-body">
        <h2>Are you sure you want delete post?</h2>
        <button onClick={() => props.deletePost(props.postId)}>Yes</button>
        <button onClick={() => props.setdeleteModalDisplay(false)}>No</button>
       </div>
      </div>
    );
  };

  export default ConfirmPost

  