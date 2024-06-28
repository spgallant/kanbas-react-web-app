import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { CiSearch } from "react-icons/ci";

import {Link, useParams} from "react-router-dom";

export default function AssignmentsControls(
    { setassignmentName, assignmentName, addAssignment }:
    { assignmentName: string; setassignmentName: (title: string) => void; addAssignment: () => void; }) {



    const { cid } = useParams(); 


    return (
        <div id="wd-assignments-controls" className="d-flex justify-content-between align-items-center mb-3">

            


            <div id="wd-search-container" className="flex-grow-1 me-2" style={{ maxWidth: "300px" }}>
                
                <input id="wd-search-assignment" className="form-control form-control-lg"
                    placeholder="&#x1F50D; Search..."       
                />
            </div>


            <div id="wd-button-container" >
                {/* <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button> */}

                <Link 
                    to={`/Kanbas/Courses/${cid}/Assignments/New`} 
                    id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Link>

                <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
            </div>










        </div>
    );
}