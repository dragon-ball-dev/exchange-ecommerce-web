import Data from "./Data";
import CategoryHead from "./CategoryHead";
import './category.scss'

function CategoryPage(){
    return <div className="category-container">
        <CategoryHead />
        <Data />
    </div>
}

export default CategoryPage;