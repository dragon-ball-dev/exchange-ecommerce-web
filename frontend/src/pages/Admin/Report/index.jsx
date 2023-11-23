import Data from "./Data";
import ReportHead from "./ReportHead";
import './report.scss'

function ReportPage(){
    return <div className="report-container">
        <ReportHead />
        <Data />
    </div>
}

export default ReportPage;