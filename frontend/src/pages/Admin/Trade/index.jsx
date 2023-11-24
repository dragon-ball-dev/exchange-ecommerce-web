import Data from "./Data";
import TradeHead from "./TradeHead";
import './trade.scss'

function TradePage(){
    return <div className="trade-container">
        <TradeHead />
        <Data />
    </div>
}

export default TradePage;