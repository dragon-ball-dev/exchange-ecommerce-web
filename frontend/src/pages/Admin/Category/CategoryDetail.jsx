import { Button, Modal, Table, Tag } from 'antd';
import Detail from '../../../layouts/Admin/components/Detail';
function transformData(category) {
    return [
        {
            key: '1',
            property: 'ID',
            value: category.id,
        },
        {
            key: '2',
            property: 'Tên danh mục',
            value: category.name,
        }
    ];
}
function CategoryDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default CategoryDetail;