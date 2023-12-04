import { Link, NavLink } from 'react-router-dom';
import { useGetListPost } from '../../../hooks/api/usePostApi';
import config from '../../../config';

const Product = () => {
    const { data, isLoading } = useGetListPost({
        pageNo: 1,
        pageSize: 10,
    });
    return (
        <div className="my-[4rem] w-[1280px]">
            <div className="shadow-sm bg-white flex flex-col px-16 rounded-3xl max-md:px-5">
                <div className="justify-center text-gray-800 text-6xl font-bold leading-[58px] self-stretch whitespace-nowrap mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
                    You might like it
                </div>
                <div className="flex ">
                    {data?.content?.map((item) => {
                        return (
                            <Link to={`${config.routes.web.product_detail}/${item.id}`} className="p-5">
                                <div className="justify-center items-stretch  flex flex-col rounded-2xl">
                                    <img
                                        loading="lazy"
                                        src={item.image}
                                        className="aspect-[0.9] border border-solid border-black object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                                    />
                                </div>
                                <div className="justify-center text-gray-800 text-[2rem] font-bold mt-1.5">
                                    {item.title}
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <Link
                    to={config.routes.web.explore}
                    className="justify-center text-white text-center text-3xl font-bold  whitespace-nowrap items-center bg-violet-700 self-center w-[180px] max-w-full mt-6 mb-12 px-5 py-5 rounded-[52px] max-md:mb-10"
                >
                    Explore more
                </Link>
            </div>
        </div>
    );
};
export default Product;
