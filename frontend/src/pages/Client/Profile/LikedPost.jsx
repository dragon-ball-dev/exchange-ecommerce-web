import { notification } from 'antd';
import { useDeletePost, useGetUserLikePost, useUnLikePost } from '../../../hooks/api/usePostApi';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LikedPost({ user }) {
    const { data, isLoading, refetch } = useGetUserLikePost({
        userId: user?.id,
        pageNo: 1,
        pageSize: 100,
    });

    const mutateUnLike = useUnLikePost({
        success: () => {
            notification.success({
                message: 'Thành công',
            });
            refetch();
        },
        error: (err) => {
            notification.error({
                message: 'Thất bại',
            });
        },
    });

    const onUnLike = async (id) => {
        await mutateUnLike.mutateAsync(id, {});
    };

    return (
        <div className="items-center my-[15rem] border border-solid mb-[50px] px-20 py-10 self-center shadow-sm bg-white z-[1] flex w-[1028px] max-w-full flex-col gap-[2rem] rounded-2xl">
            {data?.data?.content?.length > 0 ? (
                data?.data?.content?.map((post) => (
                    <div className="flex items-center justify-between gap-[2rem] w-full border border-solid p-5">
                        <div className="flex items-center gap-[2rem]">
                            <div>
                                <img
                                    className="border border-solid"
                                    srcSet={post.image}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="text-[1.6rem]">
                                <p className="font-bold text-[2rem]">{post?.title}</p>
                                <p>Nội dung: {post?.content}</p>
                            </div>
                        </div>
                        <div className="text-[2rem] mr-5">
                            <FontAwesomeIcon
                                onClick={() => onUnLike(post?.id)}
                                className="text-red-500 cursor-pointer"
                                icon={faHeart}
                            />
                        </div>
                    </div>
                ))
            ) : (
                <div className="items-center border border-solid mb-[50px] self-center shadow-sm bg-white z-[1] flex w-[1028px] max-w-full flex-col pb-4 rounded-2xl">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51538f39-2915-45bb-9d2a-45fd66b804cb?apiKey=b570640ca9b549a79647f94d6104bae5&"
                        className="aspect-[2] object-contain object-center w-[400px] overflow-hidden self-center max-w-full mt-24 max-md:mt-10"
                    />
                    <div className="text-gray-800 text-3xl font-bold leading-6 self-center whitespace-nowrap mt-9"></div>
                </div>
            )}
        </div>
    );
}
export default LikedPost;
