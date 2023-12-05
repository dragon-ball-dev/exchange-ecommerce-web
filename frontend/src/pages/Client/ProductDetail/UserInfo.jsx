import { notification } from "antd";
import { useLikePost } from "../../../hooks/api/usePostApi";

const UserInfo = ({data, refetch}) => {
    const mutateLike = useLikePost(data?.id, {
        success: () => {
            notification.success({
                message: 'Like post successfully',
            });
            refetch();
        },
        error: () => {
            notification.error({
                message: 'Like post failed',
            });
        }
    });
    const onLike = async () => {
        mutateLike.mutateAsync();
    }

    return (
        <section className="flex w-[700px] max-w-full flex-col items-stretch mt-16 self-end">
            <header className="justify-between flex w-full gap-5 pb-1.5 px-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-gray-500 text-2xl font-bold leading-6">
                    <span className="font-bold text-gray-800">{new Date(data?.date).toLocaleString()}</span>
                </div>
                <div className="items-stretch flex gap-3.5 mt-1.5">
                    <img
                        onClick={onLike}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1a64c6-4784-4261-b435-a3724a338464?apiKey=b570640ca9b549a79647f94d6104bae5&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        alt=""
                    />
                    <div className="text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap">
                        {data?.likeCount}
                    </div>
                </div>
            </header>
            <div className="flex w-[188px] max-w-full gap-[5rem] mt-4 px-5 items-center">
                <div className="text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap -mr-5">
                    Trade by
                </div>
                <div className="justify-between items-stretch flex gap-2 -mr-5 mt-2">
                    <img
                        loading="lazy"
                        src={data?.userId?.imageUrl}
                        className="aspect-square border border-solid rounded-full object-contain object-center w-[74px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        alt=""
                    />
                    <div className="text-gray-800 text-xl font-bold leading-7 self-center whitespace-nowrap my-auto">
                        <a
                            href=""
                            rel="noopener noreferrer"
                        >
                            {data?.userId?.name}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default UserInfo;
