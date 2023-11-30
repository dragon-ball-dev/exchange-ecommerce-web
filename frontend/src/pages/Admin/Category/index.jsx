import Data from "./Data";
import CategoryHead from "./CategoryHead";
import './category.scss'
import { useState } from "react";

function CategoryPage(){
    const [params, setParams] = useState({
        pageNo: 1,
        pageSize: 5,
    });
    return <div className="category-container">
        <CategoryHead />
        <Data params={params} setParams={setParams}/>
    </div>
}

export default CategoryPage;