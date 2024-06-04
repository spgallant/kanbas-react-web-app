import { LiaFileImportSolid } from "react-icons/lia";
import { FaCog } from "react-icons/fa";
import { LiaFileExportSolid } from "react-icons/lia";

export default function ButtonControls() {
    return (

        <div id="wd-button-controls">   
        
                <button id="wd-settings-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <FaCog className="position-relative me-1" style={{ bottom: "1px" }} />
                    
                </button>


                <div id="wd-add-assignment-btn" className="me-1 float-end">
                    
                    <select id="wd-export" className=" form-select">
                        <option selected value="EXPORT">Export</option>
                    </select>
                </div>


                <button id="wd-import-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <LiaFileImportSolid className="position-relative me-2" style={{ bottom: "1px" }} />
                    Import
                </button>



        
        
        </div>

    );
}