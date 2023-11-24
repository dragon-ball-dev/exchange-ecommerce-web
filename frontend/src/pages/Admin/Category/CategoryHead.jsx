import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';

function CategoryHead() {
    return (
        <Head
            isAdd={false}
            title={'Quản lý danh mục'}
        />
    );
}

export default CategoryHead;