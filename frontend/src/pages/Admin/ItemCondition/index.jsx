import Data from "./Data";
import ItemConditionHead from "./ItemConditionHead";
import './condition.scss'

function ItemConditionPage(){
    return <div className="condition-container">
        <ItemConditionHead />
        <Data />
    </div>
}

export default ItemConditionPage;