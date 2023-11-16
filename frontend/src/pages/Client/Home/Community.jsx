import { NavLink } from 'react-router-dom';

const Community = () => {
    return (
        <div className="relative w-[1280px] my-[4rem] flex flex-col items-center">
            <div className="font-bold text-[#2c2339] text-[66px] tracking-[0] leading-[59.4px]">
                Build your community
            </div>
            <div className="my-[3rem]">
                <p className="w-[595px] h-[108px] font-bold text-[#2c2339] text-[20px] tracking-[0] leading-[28px]">
                    Bunz is anywhere and everywhere you want Bunz to be! We have active communities
                    in cities all over the world, like Toronto, Vancouver, Montreal, New York City,
                    London, and we’re growing every day!
                </p>
            </div>
            <NavLink className="w-[180px] h-[52px] bg-[#ffee55] rounded-[52px] overflow-hidden text-center ">
                <div className="font-bold text-[#2c2339] text-[18px] tracking-[0] leading-[52px] whitespace-nowrap">
                    Explore more
                </div>
            </NavLink>
        </div>
    );
};
export default Community;
