import Filter from './Filter';
import Product from './Product';

const ExplorePage = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <Filter />
                <Product />
            </div>
        </div>
    );
};

export default ExplorePage;
