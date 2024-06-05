import { LiaFileImportSolid } from "react-icons/lia";
import { FaCog } from "react-icons/fa";
import { LiaFileExportSolid } from "react-icons/lia";

export default function ButtonControls() {
    return (

        <div id="wd-button-controls" className="d-flex justify-content-end align-items-center mb-2">   
                
                <button id="wd-import-btn" className="btn btn-lg btn-secondary me-1 float-end">
                        <LiaFileImportSolid className="position-relative me-2" style={{ bottom: "1px" }} />
                        Import
                </button>
                  



                <div id="wd-add-assignment-btn" className="btn-group me-1">
                   
                        
                        <button id="wd-export-btn" className="btn btn-lg btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                            <LiaFileExportSolid className="position-relative me-1" style={{ bottom: "1px" }} />
                            Export
                        </button>

                        <ul className="dropdown-menu" aria-labelledby="wd-export">
                            <li>
                                <a className="dropdown-item" href="#">
                                    <LiaFileExportSolid className="me-1" />
                                    Export
                                </a>
                            </li>
                        </ul>
                    
                    
                </div>



                <button id="wd-settings-btn" className="btn btn-lg btn-secondary me-1 " style={{ padding: "0.5rem 0.6rem" }}>
                        <FaCog className="position-relative me-1" style={{ bottom: "1px", fontSize: "1.5rem" }} />
                        
                </button>



        
        
        </div>

    );
}