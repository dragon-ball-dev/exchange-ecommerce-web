import { Button, Modal, Table, Tag } from 'antd';
import Detail from '../../../layouts/Admin/components/Detail';
const rawData = [
    {
        key: '1',
        property: 'ID',
        value: '1',
    },
    {
        key: '2',
        property: 'Ngày tạo',
        value: new Date().toLocaleString(),
    },
    {
        key: '3',
        property: 'Ngày cập nhật',
        value: new Date().toLocaleString(),
    },
    {
        key: '4',
        property: 'Người đăng',
        value: 't',
    },
    {
        key: '5',
        property: 'Nội dung',
        value: 'Cần bán',
    },
    {
        key: '6',
        property: 'Bài viết',
        value: 'Đồ gia dụng',
    },
    {
        key: '7',
        property: 'Ảnh người dùng',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '8',
        property: 'Ảnh bài viết',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '9',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="red">
                Đã gỡ bài
            </Tag>
        ),
    },
];
function PostDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default PostDetail;