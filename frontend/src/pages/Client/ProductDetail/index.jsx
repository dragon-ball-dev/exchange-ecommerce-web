import { useParams } from 'react-router-dom';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import UserInfo from './UserInfo';
import { useGetPost } from '../../../hooks/api/usePostApi';

const ProductDetailPage = () => {
    const {id} = useParams();

    const {data, isLoading, refetch} = useGetPost(id);

    return (
        <div className="flex flex-col items-center my-8">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                        <ProductImages data={data}/>
                        <UserInfo data={data} refetch={refetch}/>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                    <ProductInfo data={data}/>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
