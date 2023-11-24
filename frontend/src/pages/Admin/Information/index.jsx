import Data from "./Data";
import InformationHead from "./InformationHead";
import './information.scss'

function InformationPage(){
    return <div className="information-container">
        <InformationHead />
        <Data />
    </div>
}

export default InformationPage;