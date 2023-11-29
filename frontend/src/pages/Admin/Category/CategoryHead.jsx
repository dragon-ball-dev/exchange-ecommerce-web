import Head from '../../../layouts/Admin/components/Head';
import config from '../../../config';

function CategoryHead() {
    return (
        <Head
            title={'Quản lý danh mục'}
            route={config.routes.admin.category + '/create'}
        />
    );
}

export default CategoryHead;