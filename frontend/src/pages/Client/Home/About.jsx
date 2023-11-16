import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div className="relative w-[1280px] my-[4rem]">
            <div className="font-bold text-[#2c2339] text-[66px] tracking-[0] leading-[59.4px]">
                Bunz is about goods
            </div>
            <div className="my-[3rem]">
                <p className="w-[595px] h-[108px] font-bold text-[#2c2339] text-[20px] tracking-[0] leading-[28px]">
                    The Bunz vision was founded in 2013 with one simple need, a jar of
                    <br />
                    sauce to make mom’s spaghetti. From there, the good word of Bunz
                    <br />
                    spread through parties, shops, students - and with it - the spirit of
                    <br />
                    Bunz was born.
                </p>
            </div>
            <div className="w-[180px] h-[52px] bg-[#ffee55] rounded-[52px] overflow-hidden text-center cursor-pointer">
                <NavLink className="font-bold text-[#2c2339] text-[18px] tracking-[0] leading-[52px] whitespace-nowrap">
                    Explore more
                </NavLink>
            </div>
        </div>
    );
};
export default About;
