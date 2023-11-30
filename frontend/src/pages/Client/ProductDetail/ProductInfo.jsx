import { Button } from 'antd';
import { Link } from 'react-router-dom';
import config from '../../../config';

const ProductInfo = ({ data }) => {
    return (
        <div className="flex flex-col mt-4 px-5 max-md:max-w-full max-md:mt-10">
            <div className="text-gray-800 text-[4rem] font-bold -mr-5 max-md:max-w-full">
                {data?.title}
            </div>
            <Link to={config.routes.web.chat} className="w-1/2 flex justify-center items-center text-white rounded-[3rem] bg-yellow-400 h-20 text-[2rem]">Start chat</Link>
            <div className="items-stretch self-stretch flex flex-col -mr-5 mt-12 max-md:max-w-full max-md:mt-10">
                <div className="text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap max-md:max-w-full">
                    Description
                </div>
                <div className="text-gray-800 text-2xl mt-2 max-md:max-w-full">{data?.content}</div>
            </div>
            <div className="items-center flex w-[184px] max-w-full gap-[3rem] mt-8">
                <div className="text-gray-800 text-2xl font-bold leading-6 my-auto">Category</div>
                <div className="text-gray-800 text-2xl leading-7 ">{data?.categoryId}</div>
            </div>
            {/* <div className="self-stretch flex  gap-[3rem] -mr-5 mt-9 pr-16 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="text-gray-800 text-2xl font-bold leading-6 mt-2">Condition</div>
                <div className="max-w-[338px] self-stretch bg-violet-50 flex justify-between gap-2 pl-4 pr-9 py-3.5 rounded-2xl max-md:pr-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d6977e-09d8-4ed5-8320-3e4d518ae849?apiKey=b570640ca9b549a79647f94d6104bae5&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="items-stretch flex grow basis-[0%] flex-col">
                        <div className="text-gray-800 text-xl leading-7 whitespace-nowrap">
                            Like new
                        </div>
                        <div className="text-gray-800 text-lg leading-5 mt-1">
                            Lightly used and fully functional, but does
                            <br />
                            not include the original packaging or tags.
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="items-stretch self-stretch flex flex-col -mr-5 mt-8 ">
                <div className="text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap max-md:max-w-full">
                    Meeting spots
                </div>
                <div className="justify-center items-stretch bg-stone-200 flex flex-col mt-2  rounded-3xl">
                    <div className="overflow-hidden pl-1.5 pt-12 max-md:max-w-full rounded-3xl">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 rounded-3xl">
                            <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0 rounded-3xl">
                            <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed3931da-04d3-404e-9f77-5c910e995fb7?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                    className="aspect-[2.75]  rounded-3xl object-contain object-center w-[66px] justify-center items-center overflow-hidden shrink-0 max-w-full mt-48 max-md:mt-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
export default ProductInfo;
