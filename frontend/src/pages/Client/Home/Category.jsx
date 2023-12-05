import { NavLink } from "react-router-dom";
import { useGetListCategory } from "../../../hooks/api/useCategoryApi";

const Category = () => {
    const {data, isLoading} = useGetListCategory({
        pageNo: 1,
        pageSize: 100
    });
    return (
        <div className="relative w-[1280px] h-[362px]">
            <div className="absolute w-[201px] h-[29px] top-[56px] left-[20px] [font-family:'Lato-Bold',Helvetica] font-bold text-[#2c2339] text-[24px] tracking-[0] leading-[31.2px] whitespace-nowrap">
                Popular categories
            </div>
            <NavLink className="absolute w-[95px] h-[28px] top-[58px] left-[1166px] [font-family:'Lato-Bold',Helvetica] font-bold text-[#4e15f4] text-[20px] tracking-[0] leading-[28px] whitespace-nowrap">
                Explore all
            </NavLink>
            <div className="absolute flex w-[1240px] h-[250px] top-[103px] left-[20px] overflow-x-scroll">
                {
                    data?.data?.content?.map((item) => {
                        let randomColor = Math.floor(Math.random()*16777215).toString(16);
                        return (
                            <div className="relative w-[143px] h-[203px] top-0 mr-10">
                                <div style={{
                                    backgroundColor: `#${randomColor}`
                                }} className={`absolute w-[143px] h-[143px] top-0 left-0 rounded-[16px]`} />
                                <div className="absolute w-[143px] h-[52px] top-[151px] left-0">
                                    <div className="absolute w-[98px] h-[50px] top-0 left-0 [font-family:'Lato-Bold',Helvetica] font-bold text-[#2c2339] text-[20px] tracking-[0] leading-[26px]">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};
export default Category;
