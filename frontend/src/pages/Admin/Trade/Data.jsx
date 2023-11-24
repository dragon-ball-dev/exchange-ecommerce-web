import { faEdit, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Table, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';
import ConfirmPrompt from '../../../layouts/Admin/components/ConfirmPrompt';
import TradeDetail from './TradeDetail';

const baseColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: true,
        width: 50,
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
        sorter: true,
        ellipsis: true,
        width: 200,
    },
    {
        title: 'Người mua',
        dataIndex: 'client',
        sorter: true,
    },
    {
        title: 'Người bán',
        dataIndex: 'seller',
        sorter: true,
    },
    {
        title: 'Ảnh bài viết',
        dataIndex: 'postImage',
    },
    {
        title: 'Bài viết',
        dataIndex: 'post',
        sorter: true,
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        sorter: true,
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
    },
];
function Data() {
    const [isDetailOpen, setIsDetailOpen] = useState({
        id: 0,
        isOpen: false
    });
    const [isDisableOpen, setIsDisableOpen] = useState({
        id: 0,
        isOpen: false
    });
    const navigate = useNavigate();
    const [rawData, setRawData] = useState([
        {
            key: '1',
            id: '1',
            createdAt: new Date().toLocaleString(),
            postImage: (
                <img
                    className="w-20 h-20 rounded-xl"
                    src="https://dummyimage.com/138x100.png/dddddd/000000"
                />
            ),
            seller: 't',
            client: 't',
            post: 'Đồ gia dụng',
            status: (
                <Tag className="w-fit uppercase" color="green">
                    Đã hoàn thành
                </Tag>
            ),
            action: (
                <div className="flex gap-3">
                    <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen({
                            id: 1,
                            isOpen: true
                        })}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                    {/* <Button
                        className="text-green-500 border border-green-500"
                        // onClick={() => navigate(`${config.routes.admin.post}/1`)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button> */}
                    <Button
                        className="text-red-500 border border-red-500"
                        onClick={() => setIsDisableOpen({
                            id: 1,
                            isOpen: true
                        })}
                    >
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </Button>
                </div>
            ),
        },
    ]);
    const [data, setData] = useState(rawData);
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            name: record.name,
        }),
    };
    const onSearch = (value) => {
        const dt = rawData;
        const filterTable = dt.filter((o) =>
            Object.keys(o).some((k) => String(o[k]).toLowerCase().includes(value.toLowerCase())),
        );

        setData(filterTable);
    };

    return (
        <div>
            <div className="p-4 bg-white mb-3 flex items-center rounded-lg">
                <Input.Search
                    className="xl:w-1/4 md:w-1/2"
                    allowClear
                    enterButton
                    placeholder="Nhập từ khoá tìm kiếm"
                    onSearch={onSearch}
                />
            </div>
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={baseColumns}
                dataSource={data}
                pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                }}
            />
            <TradeDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
            <ConfirmPrompt
                content="Bạn có muốn ẩn báo cáo này ?"
                isDisableOpen={isDisableOpen}
                setIsDisableOpen={setIsDisableOpen}
            />
        </div>
    );
}

export default Data;