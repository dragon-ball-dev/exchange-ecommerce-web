import Data from "./Data";
import PostHead from "./PostHead";
import './post.scss'

function PostPage(){
    return <div className="post-container">
        <PostHead />
        <Data />
    </div>
}

export default PostPage;