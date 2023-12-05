import { faEdit, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Table, Tag, notification } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';
import ConfirmPrompt from '../../../layouts/Admin/components/ConfirmPrompt';
import PostDetail from './PostDetail';
import { useDeletePost, useGetListPost } from '../../../hooks/api/usePostApi';

const baseColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: true,
        width: 50,
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'date',
    },
    {
        title: 'Ảnh',
        dataIndex: 'image',
    },
    {
        title: 'Tiêu đề',
        dataIndex: 'title',
    },
    {
        title: 'Nội dung',
        dataIndex: 'content',
    },
    {
        title: 'Danh mục',
        dataIndex: 'categoryId',
    },
    {
        title: 'Người đăng',
        dataIndex: 'userId',
    },
    {
        title: 'Tổng lượt thích',
        dataIndex: 'likeCount',
    },
    {
        title: 'Thao tác',
        dataIndex: 'action',
    },
];

function transformData(dt, navigate, setIsDetailOpen, setIsDisableOpen) {
    return dt?.map((item) => {
        return {
            key: item.id,
            id: item.id,
            date: new Date(item.date)?.toLocaleString(),
            title: item.title,
            content: item.content,
            categoryId: item.categoryId.name,
            userId: item.userId.name,
            likeCount: item.likeCount,
            image: (
                <img
                    className="w-20 h-20 rounded-xl"
                    src={item.image}
                />
            ),
            action: (
                <div className="action-btn flex gap-3">
                    {/* <Button
                        className="text-green-500 border border-green-500"
                        onClick={() =>
                            navigate(`${config.routes.admin.Post}/${item.id}`)
                        }
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button> */}
                    <Button
                        className={'text-red-500 border border-red-500'}
                        onClick={() => setIsDisableOpen({ id: item.id, isOpen: true })}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
            ),
        };
    });
}

function Data({ setProductPostIds, params, setParams }) {
    const [isDetailOpen, setIsDetailOpen] = useState({
        id: 0,
        isOpen: false,
    });
    const [isDisableOpen, setIsDisableOpen] = useState({
        id: 0,
        isOpen: false,
    });
    const navigate = useNavigate();
    const { data, isLoading, refetch } = useGetListPost(params);
    const [tdata, setTData] = useState([]);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: params.pageNo,
            pageSize: params.pageSize,
            total: data?.totalElements,
        },
    });

    useEffect(() => {
        if (isLoading || !data) return;
        let dt = transformData(data?.content, navigate, setIsDetailOpen, setIsDisableOpen);
        setTData(dt);
        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                total: data?.totalElements,
            },
        });
    }, [isLoading, data]);

    const onSearch = (value) => {
        const dt = rawData;
        const filterTable = dt.filter((o) =>
            Object.keys(o).some((k) => String(o[k]).toLowerCase().includes(value.toLowerCase())),
        );

        setTData(filterTable);
    };

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            ...tableParams,
            pagination,
            ...sorter,
        });
        setParams({
            ...params,
            pageNo: pagination.current,
            pageSize: pagination.pageSize
        });
    };

    const mutationDelete = useDeletePost({
        success: () => {
            setIsDisableOpen({ ...isDisableOpen, isOpen: false });
            notification.success({
                message: 'Thành công'
            });
            refetch();
        },
        error: (err) => {
            notification.error({
                message: 'Thất bại'
            });
        }
    });

    const onDelete = async (id) => {
        await mutationDelete.mutateAsync(id);
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
                loading={isLoading}
                columns={baseColumns}
                dataSource={tdata}
                pagination={{ ...tableParams.pagination, showSizeChanger: true }}
                onChange={handleTableChange}
            />

            {isDisableOpen.id !== 0 && (
                <ConfirmPrompt
                    content="Bạn có muốn xoá bài này ?"
                    isDisableOpen={isDisableOpen}
                    setIsDisableOpen={setIsDisableOpen}
                    handleConfirm={onDelete}
                />
            )}
        </div>
    );
}

export default Data;
