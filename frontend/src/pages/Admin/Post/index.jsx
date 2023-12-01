import { useState } from 'react';
import Data from './Data';
import PostHead from './PostHead';
import './post.scss';

function PostPage() {
    const [postIds, setPostIds] = useState([]);
    const [params, setParams] = useState({
        pageNo: 1,
        pageSize: 5,
    });
    return (
        <div className="post-container">
            <PostHead />
            <Data params={params} setParams={setParams}/>
        </div>
    );
}

export default PostPage;
