import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { CiSearch } from "react-icons/ci";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="d-flex justify-content-between align-items-center mb-3">

            


            <div id="wd-search-container" className="flex-grow-1 me-2" style={{ maxWidth: "300px" }}>
                
                <input id="wd-search-assignment" className="form-control form-control-lg"
                    placeholder="&#x1F50D; Search..."       
                />
            </div>


            <div id="wd-button-container" >
                <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>

                <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
            </div>










        </div>
    );
}