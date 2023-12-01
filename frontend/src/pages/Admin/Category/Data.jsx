import { faEdit, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input, Table, Tag, notification } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';
import ConfirmPrompt from '../../../layouts/Admin/components/ConfirmPrompt';
import CategoryDetail from './CategoryDetail';
import { useDeleteCategory, useGetListCategory } from '../../../hooks/api/useCategoryApi';

const baseColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: true,
        width: 50,
    },
    {
        title: 'Tên danh mục',
        dataIndex: 'name',
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
            name: item.name,
            action: (
                <div className="action-btn flex gap-3">
                    {/* <Button
                        className="text-blue-500 border border-blue-500"
                        onClick={() => setIsDetailOpen({ id: item.id, isOpen: true })}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button> */}
                    <Button
                        className="text-green-500 border border-green-500"
                        onClick={() =>
                            navigate(`${config.routes.admin.category}/${item.id}`)
                        }
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
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

function Data({ setProductCategoryIds, params, setParams }) {
    const [isDetailOpen, setIsDetailOpen] = useState({
        id: 0,
        isOpen: false,
    });
    const [isDisableOpen, setIsDisableOpen] = useState({
        id: 0,
        isOpen: false,
    });
    const navigate = useNavigate();
    const { data, isLoading, refetch } = useGetListCategory(params);
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
        let dt = transformData(data?.data?.content, navigate, setIsDetailOpen, setIsDisableOpen);
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

    const mutationDelete = useDeleteCategory({
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
        },
        obj: {
            id: isDisableOpen.id,
            params: params,
        },
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

            {/* {isDetailOpen.id !== 0 && (
                <CategoryDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} />
            )} */}

            {isDisableOpen.id !== 0 && (
                <ConfirmPrompt
                    content="Bạn có muốn ẩn danh mục này ?"
                    isDisableOpen={isDisableOpen}
                    setIsDisableOpen={setIsDisableOpen}
                    handleConfirm={onDelete}
                />
            )}
        </div>
    );
}

export default Data;
