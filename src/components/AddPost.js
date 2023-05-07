import './AddPost.css'

const AddPost = (props) => {

    const getTextArea = (event) => {
        
        const textArea = event;
        // props.setPostContent(textArea)
            

        }
    


    return (
        <div className="addPost">
            <form>
                <textarea className="textarea" onChange={(e) => getTextArea(e.target.value)}></textarea>
                <button className="btn addPostBtn">Add post</button>   
            </form>
        </div>
    )        
}

export default AddPost