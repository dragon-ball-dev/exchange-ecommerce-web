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
        property: 'Ngày trao đổi',
        value: new Date().toLocaleString(),
    },
    {
        key: '5',
        property: 'Người bán',
        value: 't',
    },
    {
        key: '6',
        property: 'Người mua',
        value: 't',
    },
    {
        key: '7',
        property: 'Bài viết',
        value: 'Đồ gia dụng',
    },
    {
        key: '8',
        property: 'Ảnh người bán',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '9',
        property: 'Ảnh người mua',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '10',
        property: 'Ảnh bài viết',
        value: (
            <img
                className="w-20 h-20 rounded-xl"
                src="https://dummyimage.com/138x100.png/dddddd/000000"
            />
        ),
    },
    {
        key: '11',
        property: 'Trạng thái',
        value: (
            <Tag className="w-fit uppercase" color="green">
                Hoàn thành
            </Tag>
        ),
    },
];
function TradeDetail({ isDetailOpen, setIsDetailOpen }) {
    return (
        <Detail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} rawData={rawData} />
    );
}

export default TradeDetail;