const Filter = () => {
    return (
        <div className="relative my-[4rem]">
            <div className=" w-[605px] h-[56px]  bg-[#f5f3fb] rounded-[16px] overflow-hidden">
                <div className="w-[441px] left-[78px] absolute h-[56px] top-0">
                    <p className="h-[19px] left-[112px] font-bold text-transparent text-[16px] text-center tracking-[0] leading-[56px] whitespace-nowrap">
                        <div className="text-[#6c6d84] w-full">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full outline-none text-[3rem] my-4 bg-[#f5f3fb]"
                            />
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
    );
};

export default Filter;
