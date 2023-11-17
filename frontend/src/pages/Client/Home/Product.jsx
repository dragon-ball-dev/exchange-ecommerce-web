import { NavLink } from 'react-router-dom';

const Product = () => {
    return (
        <div className="my-[4rem]">
            <div className="shadow-sm bg-white flex flex-col px-16 rounded-3xl max-md:px-5">
                <div className="justify-center text-gray-800 text-6xl font-bold leading-[58px] self-stretch whitespace-nowrap mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
                    You might like it
                </div>
                <div className="self-stretch flex items-start justify-between gap-5 mt-9 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f514a859-42c9-4698-a307-db794474677e?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f514a859-42c9-4698-a307-db794474677e?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f514a859-42c9-4698-a307-db794474677e?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f514a859-42c9-4698-a307-db794474677e?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f514a859-42c9-4698-a307-db794474677e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f514a859-42c9-4698-a307-db794474677e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f514a859-42c9-4698-a307-db794474677e?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f514a859-42c9-4698-a307-db794474677e?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 mt-1.5">
                            Chanel bags 1 with
                            <br />
                            registration
                        </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4b9aa97f-ad3e-41f8-9c02-6e0b13344382?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b9aa97f-ad3e-41f8-9c02-6e0b13344382?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b9aa97f-ad3e-41f8-9c02-6e0b13344382?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b9aa97f-ad3e-41f8-9c02-6e0b13344382?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b9aa97f-ad3e-41f8-9c02-6e0b13344382?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b9aa97f-ad3e-41f8-9c02-6e0b13344382?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b9aa97f-ad3e-41f8-9c02-6e0b13344382?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b9aa97f-ad3e-41f8-9c02-6e0b13344382?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[186px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap mt-1.5">
                            Adidas size 10
                        </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad7a4a83-069e-4f85-b4d2-8371b85c0050?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad7a4a83-069e-4f85-b4d2-8371b85c0050?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad7a4a83-069e-4f85-b4d2-8371b85c0050?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad7a4a83-069e-4f85-b4d2-8371b85c0050?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad7a4a83-069e-4f85-b4d2-8371b85c0050?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad7a4a83-069e-4f85-b4d2-8371b85c0050?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad7a4a83-069e-4f85-b4d2-8371b85c0050?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad7a4a83-069e-4f85-b4d2-8371b85c0050?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap mt-1.5">
                            Nike size 10
                        </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/79998a95-f614-4bad-8da4-0ea22800477e?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/79998a95-f614-4bad-8da4-0ea22800477e?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79998a95-f614-4bad-8da4-0ea22800477e?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/79998a95-f614-4bad-8da4-0ea22800477e?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/79998a95-f614-4bad-8da4-0ea22800477e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79998a95-f614-4bad-8da4-0ea22800477e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/79998a95-f614-4bad-8da4-0ea22800477e?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/79998a95-f614-4bad-8da4-0ea22800477e?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap mt-1.5">
                            Nike Air size 10
                        </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03227a2f-f940-44d3-bee9-4cb20b8b700e?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03227a2f-f940-44d3-bee9-4cb20b8b700e?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03227a2f-f940-44d3-bee9-4cb20b8b700e?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03227a2f-f940-44d3-bee9-4cb20b8b700e?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03227a2f-f940-44d3-bee9-4cb20b8b700e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03227a2f-f940-44d3-bee9-4cb20b8b700e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03227a2f-f940-44d3-bee9-4cb20b8b700e?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03227a2f-f940-44d3-bee9-4cb20b8b700e?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[186px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap mt-1.5">
                            Steve Madden size 10
                        </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed36df9d-ace6-4bab-8b0a-b0986f4a5b5e?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed36df9d-ace6-4bab-8b0a-b0986f4a5b5e?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed36df9d-ace6-4bab-8b0a-b0986f4a5b5e?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed36df9d-ace6-4bab-8b0a-b0986f4a5b5e?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed36df9d-ace6-4bab-8b0a-b0986f4a5b5e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed36df9d-ace6-4bab-8b0a-b0986f4a5b5e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed36df9d-ace6-4bab-8b0a-b0986f4a5b5e?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed36df9d-ace6-4bab-8b0a-b0986f4a5b5e?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap mt-1.5">
                            Herschel back pack
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d387195-940b-4bb2-986a-d50a4691746d?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d387195-940b-4bb2-986a-d50a4691746d?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d387195-940b-4bb2-986a-d50a4691746d?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d387195-940b-4bb2-986a-d50a4691746d?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d387195-940b-4bb2-986a-d50a4691746d?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d387195-940b-4bb2-986a-d50a4691746d?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d387195-940b-4bb2-986a-d50a4691746d?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d387195-940b-4bb2-986a-d50a4691746d?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 mt-1.5">
                            Rubbermaid fasttrack
                            <br />
                            closet
                        </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9cd55e36-363d-4f24-bac4-675c235a83e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd55e36-363d-4f24-bac4-675c235a83e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd55e36-363d-4f24-bac4-675c235a83e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd55e36-363d-4f24-bac4-675c235a83e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd55e36-363d-4f24-bac4-675c235a83e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd55e36-363d-4f24-bac4-675c235a83e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd55e36-363d-4f24-bac4-675c235a83e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd55e36-363d-4f24-bac4-675c235a83e0?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[186px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap mt-1.5">
                            Prodikeys PC midi
                        </div>
                    </div>
                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/523ac808-4f8a-4119-9145-0708702de7e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/523ac808-4f8a-4119-9145-0708702de7e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/523ac808-4f8a-4119-9145-0708702de7e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/523ac808-4f8a-4119-9145-0708702de7e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/523ac808-4f8a-4119-9145-0708702de7e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/523ac808-4f8a-4119-9145-0708702de7e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/523ac808-4f8a-4119-9145-0708702de7e0?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/523ac808-4f8a-4119-9145-0708702de7e0?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 mt-1.5">
                            Various Hanging File
                            <br />
                            folder
                        </div>
                    </div>
                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2c19378-5f04-4914-898c-824c503ccea6?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c19378-5f04-4914-898c-824c503ccea6?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c19378-5f04-4914-898c-824c503ccea6?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c19378-5f04-4914-898c-824c503ccea6?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c19378-5f04-4914-898c-824c503ccea6?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c19378-5f04-4914-898c-824c503ccea6?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c19378-5f04-4914-898c-824c503ccea6?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c19378-5f04-4914-898c-824c503ccea6?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 mt-1.5">
                            X24 Energizer AA
                            <br />
                            batteries
                        </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe79290a-2c5f-4ea2-a170-123d8e64485e?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe79290a-2c5f-4ea2-a170-123d8e64485e?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe79290a-2c5f-4ea2-a170-123d8e64485e?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe79290a-2c5f-4ea2-a170-123d8e64485e?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe79290a-2c5f-4ea2-a170-123d8e64485e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe79290a-2c5f-4ea2-a170-123d8e64485e?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe79290a-2c5f-4ea2-a170-123d8e64485e?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe79290a-2c5f-4ea2-a170-123d8e64485e?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[186px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap mt-1.5">
                            Christmas Items
                        </div>
                    </div>
                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                        <div className="justify-center items-stretch bg-violet-50 flex flex-col rounded-2xl">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/168c990f-5c72-4fef-a903-da5b3f3979c6?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/168c990f-5c72-4fef-a903-da5b3f3979c6?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/168c990f-5c72-4fef-a903-da5b3f3979c6?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/168c990f-5c72-4fef-a903-da5b3f3979c6?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/168c990f-5c72-4fef-a903-da5b3f3979c6?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/168c990f-5c72-4fef-a903-da5b3f3979c6?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/168c990f-5c72-4fef-a903-da5b3f3979c6?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/168c990f-5c72-4fef-a903-da5b3f3979c6?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.9] object-contain object-center w-[187px] overflow-hidden rounded-3xl"
                            />
                        </div>
                        <div className="justify-center text-gray-800 text-2xl font-bold leading-6 mt-1.5">
                            Hello Kitty Sanrio Ziploc
                            <br />
                            Bags
                        </div>
                    </div>
                </div>
                <div className="justify-center text-white text-center text-3xl font-bold leading-[52px] whitespace-nowrap items-center bg-violet-700 self-center w-[180px] max-w-full mt-6 mb-12 px-5 py-5 rounded-[52px] max-md:mb-10">
                    Explore more
                </div>
            </div>
        </div>
    );
};
export default Product;
