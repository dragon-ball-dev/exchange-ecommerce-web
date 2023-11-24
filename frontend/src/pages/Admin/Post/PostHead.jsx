import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';

function PostHead() {
    return (
        <Head
            isAdd={false}
            title={'Quản lý bài viết'}
        />
    );
}

export default PostHead;