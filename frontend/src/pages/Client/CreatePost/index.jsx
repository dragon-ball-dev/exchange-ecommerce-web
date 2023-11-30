import CreatePostForm from "./CreatePostForm";

const CreatePostPage = () => {
    return (
        <div className="container w-1/2 mx-auto mt-10 mb-10">
            <div className="justify-center items-stretch flex flex-col">
                <div className="w-full max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch px-5 max-md:mt-3">
                                <div className="text-gray-800 text-4xl font-black leading-10 whitespace-nowrap -mr-5">
                                    Create a new post
                                </div>
                            </div>
                        </div>
                        <CreatePostForm />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreatePostPage;
