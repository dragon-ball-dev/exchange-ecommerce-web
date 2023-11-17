import About from './About';
import Banner from './Banner';
import Category from './Category';
import Community from './Community';
import Product from './Product';

const HomePage = () => {
    return (
        <>
            <Banner />
            <div className='flex flex-col items-center bg-gray-200'>
                <Category />
                <About />
                <Product />
                <Community />
            </div>
        </>
    );
};

export default HomePage;
