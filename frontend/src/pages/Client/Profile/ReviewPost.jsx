function ReviewPost({ user }) {
    return (
        <div className="items-center my-[15rem] border border-solid mb-[50px] self-center shadow-sm bg-white z-[1] flex w-[1028px] max-w-full flex-col pb-4 rounded-2xl">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51538f39-2915-45bb-9d2a-45fd66b804cb?apiKey=b570640ca9b549a79647f94d6104bae5&"
                className="aspect-[2] object-contain object-center w-[400px] overflow-hidden self-center max-w-full mt-24 max-md:mt-10"
            />
            <div className="text-gray-800 text-3xl font-bold leading-6 self-center whitespace-nowrap mt-9"></div>
        </div>
    );
}
export default ReviewPost;
