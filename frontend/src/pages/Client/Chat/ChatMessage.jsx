

const ChatMessage = () => {
    return <main className="items-center self-stretch flex grow flex-col max-md:max-w-full">
    <header className="items-stretch self-stretch shadow-sm bg-white flex flex-col pt-2.5 pb-1 px-5 py-3 max-md:max-w-full">
        <nav className="items-stretch flex py-4 max-w-full justify-between gap-5 mx-4 max-md:flex-wrap max-md:mr-2.5">
            <div className="justify-between items-stretch flex gap-2">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e90510d-ca2d-43d6-9895-dae3a49a8cd7?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e90510d-ca2d-43d6-9895-dae3a49a8cd7?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e90510d-ca2d-43d6-9895-dae3a49a8cd7?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e90510d-ca2d-43d6-9895-dae3a49a8cd7?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e90510d-ca2d-43d6-9895-dae3a49a8cd7?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e90510d-ca2d-43d6-9895-dae3a49a8cd7?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e90510d-ca2d-43d6-9895-dae3a49a8cd7?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e90510d-ca2d-43d6-9895-dae3a49a8cd7?apiKey=b570640ca9b549a79647f94d6104bae5&"
                    className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden shrink-0 max-w-full"
                    alt="Profile Image"
                />
                <h1 className="text-gray-800 text-2xl font-bold leading-7 self-center whitespace-nowrap my-auto">
                    <a href="https://bunz.com/profile/upinthesky" target="_blank">
                        Tessa
                    </a>
                </h1>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22073c7e-0dd0-44d0-a29e-e70f720381d3?apiKey=b570640ca9b549a79647f94d6104bae5&"
                className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
                alt="Logo"
            />
        </nav>
    </header>
    <section className="items-stretch bg-violet-50 flex w-[668px] max-w-full gap-3 mt-[552px] pl-4 pr-20 py-3.5 rounded-2xl max-md:flex-wrap max-md:mt-10 max-md:pr-5">
        <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a724635f-8931-4b06-aa50-c66eda712013?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a724635f-8931-4b06-aa50-c66eda712013?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a724635f-8931-4b06-aa50-c66eda712013?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a724635f-8931-4b06-aa50-c66eda712013?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a724635f-8931-4b06-aa50-c66eda712013?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a724635f-8931-4b06-aa50-c66eda712013?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a724635f-8931-4b06-aa50-c66eda712013?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a724635f-8931-4b06-aa50-c66eda712013?apiKey=b570640ca9b549a79647f94d6104bae5&"
            className="aspect-square object-contain object-center w-14 justify-center items-center overflow-hidden shrink-0 max-w-full"
            alt="Product Image"
        />
        <h2 className="text-gray-800 text-2xl font-bold leading-7 self-center whitespace-nowrap my-auto">
            500ml metal water bottle bpa free
        </h2>
    </section>
    <div className="items-stretch self-stretch shadow-sm bg-white flex flex-col px-5 py-8 max-md:max-w-full">
        <div className="items-stretch flex justify-between gap-4 mx-3 pr-1.5 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
            <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="bg-violet-50 flex flex-col items-stretch px-3.5 py-2.5 rounded-2xl max-md:max-w-full">
                    <div className="items-center flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:-mr-1">
                        
                        <input placeholder="Write a message" className="text-gray-500 w-full text-3xl bg-violet-50 focus-within:outline-none tracking-normal my-auto"/>
                        <div className="max-w-[36px] justify-center items-center bg-violet-400 self-stretch flex aspect-square flex-col p-1.5 rounded-[36px]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4dacd29-a936-4254-aa2c-a9b10513b338?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-square object-contain object-center w-full overflow-hidden"
                                alt="Send Icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-stretch self-center flex gap-4 my-auto max-md:justify-center">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b9274d-4739-4372-b0bf-ba7134c4215f?apiKey=b570640ca9b549a79647f94d6104bae5&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    alt="Image 1"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/87b1295a-4f87-4013-b995-440c840e0a70?apiKey=b570640ca9b549a79647f94d6104bae5&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    alt="Image 2"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/71117461-8dde-4603-860d-9b2e94efa0e6?apiKey=b570640ca9b549a79647f94d6104bae5&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    alt="Image 3"
                />
            </div>
        </div>
    </div>
</main>
}
export default ChatMessage;