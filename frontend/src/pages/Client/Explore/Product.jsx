import { Link } from 'react-router-dom';
import { useGetListPost } from '../../../hooks/api/usePostApi';
import config from '../../../config';

const Product = () => {
    const { data, isLoading } = useGetListPost({
        pageNo: 1,
        pageSize: 10,
    });

    return (
        <div>
            <div className="my-[4rem]">
                <div className="shadow-sm bg-white flex flex-col px-16 rounded-3xl max-md:px-5">
                    <div className="self-stretch flex items-start justify-between gap-5 mt-9 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                        {data?.content?.map((item) => {
                            return (
                                <Link to={`${config.routes.web.product_detail}/${item.id}`} className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                                    <div className="justify-center items-stretch  flex flex-col rounded-2xl">
                                        <img
                                            loading="lazy"
                                            src={item.image}
                                            className="aspect-[0.9] object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                                        />
                                    </div>
                                    <div className="justify-center text-gray-800 text-[2rem] font-bold mt-1.5">
                                        {item.title}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
