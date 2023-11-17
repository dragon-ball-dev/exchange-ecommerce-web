import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative w-full flex justify-center bg-[url(https://c.animaapp.com/AXONLZa0/img/image.png)] bg-cover bg-[50%_50%]">
            <img
                className="absolute w-[240px] h-[329px] top-[160px] right-[0px]"
                alt="Img"
                src="https://c.animaapp.com/AXONLZa0/img/minionwithstarandglasses-737104d0-svg.svg"
            />
            <div className="relative w-[1280px] h-[1012px]">
                <img
                    className="absolute w-[166px] h-[138px] top-[874px] left-0"
                    alt="Minionwithstar"
                    src="https://c.animaapp.com/AXONLZa0/img/minionwithstar-27f0ad7d-svg.svg"
                />
                <div className="absolute w-[1240px] h-[254px] top-[164px] left-[20px]">
                    <div className="absolute w-[1240px] h-[82px] top-0 left-0">
                        <p className="absolute w-[691px] h-[98px] top-[-9px] left-[275px] font-bold text-white text-[82px] text-center tracking-[0] leading-[82px] whitespace-nowrap">
                            Start trading today
                        </p>
                    </div>
                    <div className="absolute w-[820px] h-[56px] top-[114px] left-[210px]">
                        <p className="absolute w-[747px] h-[55px] -top-px left-[39px] font-bold text-white text-[22px] text-center tracking-[0.35px] leading-[28px]">
                            Every day, thousands of people meet on Bunz to trade for everything from
                            <br />
                            clothing and furniture to houseplants and art.
                        </p>
                    </div>
                    <div className="absolute w-[1240px] h-[52px] top-[202px] left-0">
                        <div className="relative w-[180px] h-[52px] left-[530px] bg-[#ffee55] rounded-[52px] overflow-hidden">
                            <NavLink className="absolute w-[78px] h-[52px] -top-px left-[51px] font-bold text-[#2c2339] text-[18px] text-center tracking-[0] leading-[52px] whitespace-nowrap">
                                Join Bunz
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[1240px] h-[100px] top-[648px]">
                    <p className="absolute w-[262px] h-[28px] -top-px left-[489px] font-bold text-white text-[22px] text-center tracking-[0.35px] leading-[28px] whitespace-nowrap">
                        or explore Bunz right now
                    </p>
                    <div className="absolute w-[605px] h-[56px] top-[44px] left-[318px] bg-[#f5f3fb] rounded-[16px] overflow-hidden">
                        <div className="w-[441px] left-[78px] absolute h-[56px] top-0">
                            <p className="h-[19px] left-[112px] font-bold text-transparent text-[16px] text-center tracking-[0] leading-[56px] whitespace-nowrap">
                                <div className="text-[#6c6d84] w-full">
                                    <input type='text' placeholder='Search' className='w-full outline-none text-[3rem] bg-[#f5f3fb] my-4'/>
                                 </div>
                            </p>
                        </div>
                        <img
                            className="w-[52px] left-[21px] absolute h-[56px] top-0 cursor-pointer"
                            alt="Div fieldsearch"
                            src="https://c.animaapp.com/ASAUEt4i/img/div-fieldsearch-adornment--khxhm.svg"
                        />
                        <img
                            className="absolute w-[52px] h-[56px] top-0 left-[532px] cursor-pointer"
                            alt="Div fieldsearch"
                            src="https://c.animaapp.com/ASAUEt4i/img/div-fieldsearch-adornment--khxhm-1.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;
