import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import UserInfo from './UserInfo';

const ProductDetailPage = () => {
    return (
        <div className="flex flex-col items-center my-8">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                        <ProductImages />
                        <UserInfo />
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                    <ProductInfo />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
