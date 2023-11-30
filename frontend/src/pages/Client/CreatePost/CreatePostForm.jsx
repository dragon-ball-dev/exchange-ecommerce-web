import { Form, Input, Select, notification } from 'antd';
import UploadAvatar from '../ProfileSetting/UploadAvatar';
import { useEffect, useState } from 'react';
import { useGetListCategory } from '../../../hooks/api/useCategoryApi';
import { useCreatePost } from '../../../hooks/api/usePostApi';

function CreatePostForm() {
    const { data: categories, isLoading } = useGetListCategory({
        pageNo: 1,
        pageSize: 100,
    });
    const [selectedCategory, setSelectedCategory] = useState(-1);
    const [imageUrl, setImageUrl] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [form] = Form.useForm();
    const handleChange = (value) => {
        setSelectedCategory(value);
    };
    const mutateCreate = useCreatePost({
        success: () => {
            notification.success({
                message: 'Create post successfully',
            });
        },
        error: () => {
            notification.error({
                message: 'Create post failed',
            });
        }
    });

    const onCreate = async (values) => {
        mutateCreate.mutateAsync({
            ...values,
            categoryId: selectedCategory,
            image: imageUrl,
            itemStatus: 1,
            date: new Date(),
        });
    };

    return (
        <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
            <Form form={form} onFinish={onCreate}>
                <div className="flex flex-col items-stretch -mr-5 mt-8 pt-12 pb-8 px-16 rounded-2xl border-4 border-dashed border-indigo-50 max-md:px-5">
                    <UploadAvatar
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        setAvatar={setAvatar}
                    />
                </div>
                <div className="flex grow flex-col items-stretch mt-20 px-5 max-md:max-w-full max-md:mt-10">
                    <div className="justify-between items-stretch flex gap-5 -mr-5 max-md:max-w-full max-md:flex-wrap">
                        <div className="text-gray-800 text-xl font-bold leading-7">Title</div>
                        <div className="text-gray-500 text-sm font-bold leading-5 whitespace-nowrap self-start">
                            0/64
                        </div>
                    </div>
                    <div className="items-stretch flex flex-col -mr-5 mt-1 max-md:max-w-full">
                        <Form.Item
                            name={'title'}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter title"
                                className="text-gray-500 focus-within:outline-none text-xl leading-6 tracking-normal whitespace-nowrap bg-violet-50 px-3.5 py-4 rounded-2xl max-md:max-w-full"
                            />
                        </Form.Item>
                    </div>
                    <div className="text-gray-800 text-xl font-bold leading-7 whitespace-nowrap -mr-5 mt-6 max-md:max-w-full">
                        Description
                    </div>
                    <div className="items-stretch flex flex-col -mr-5 mt-1 max-md:max-w-full">
                        <Form.Item
                            name={'content'}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.TextArea
                                rows={4}
                                placeholder="Describe your item or write a public message"
                                className="text-gray-500 text-xl leading-7 tracking-normal whitespace-nowrap bg-violet-50 pt-4 pb-28 px-3.5 rounded-2xl max-md:max-w-full max-md:pb-10"
                            />
                        </Form.Item>
                    </div>
                </div>

                <div className="flex w-[498px] max-w-full flex-col mt-6 px-5 self-end">
                    {/* <div className="items-center self-center flex w-full justify-between gap-5 mt-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-stretch gap-2.5 my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba89b8e9-5040-402a-8f96-3c2bfd63fddb?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-gray-800 text-xl leading-6 whitespace-nowrap">
                                Meeting Spot
                            </div>
                        </div>
                        <div className="text-violet-700 text-center text-xl font-bold leading-[52px] self-stretch">
                            Select
                        </div>
                    </div>
                    <div className="max-w-[443px] text-gray-800 text-base leading-6 self-stretch -mr-5 mt-1.5 px-5 border-l-2 border-l-rose-500 border-solid max-md:max-w-full">
                        You don’t have any meeting spots yet. Add at least one meeting
                        <br />
                        spot, and your post will see people around.
                    </div> */}
                    <div className="items-center self-center flex w-full justify-between gap-5 mt-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-stretch gap-2.5 my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a8e813-aecc-4947-9c84-1a26128afaf3?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-gray-800 text-xl leading-6 whitespace-nowrap">
                                Category
                            </div>
                        </div>
                        <Select
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={categories?.data?.content?.map((cate) => {
                                return {
                                    value: cate.id,
                                    label: cate.name,
                                };
                            })}
                        />
                    </div>
                    {/* <div className="items-center self-center flex w-full justify-between gap-5 mt-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-stretch gap-2.5 my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2fd0a4a-b8d7-49be-bc7e-696b4397e0d0?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-gray-800 text-xl leading-6 whitespace-nowrap">
                                Item condition
                            </div>
                        </div>
                        <div className="text-violet-700 text-center text-xl font-bold leading-[52px] self-stretch">
                            Select
                        </div>
                    </div> */}
                    <div className="justify-end items-stretch flex w-[376px] max-w-full gap-4 -mr-5 mt-12 self-end max-md:mt-10">
                        <div className="text-gray-800 cursor-pointer text-center text-xl font-bold leading-[52px] items-center bg-violet-50 grow px-5 rounded-[52px]">
                            Cancel
                        </div>
                        <button
                            type="submit"
                            className="text-stone-300 cursor-pointer text-center text-xl font-bold leading-[52px] items-center bg-amber-500 grow px-5 rounded-[52px]"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default CreatePostForm;
