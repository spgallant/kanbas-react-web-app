import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from 'react-icons/bs';
import { BiSolidDownArrow } from "react-icons/bi";
import LessonControlButtons from './LessonControlButtons';
import { FaRegEdit } from "react-icons/fa";
import AssignmentStartIcons from "./AssignmentStartIcons"
import AssignmentHeaderIcons from "./AssignmentHeaderIcons";


import {useParams} from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function Assignments() {
    const {cid} = useParams();
    const assignments = db.assignments;
   


    // Name: formatDate
    // Purpose: Translate dates from datetime into specific assignment written format
    // Citation: https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format 
    function formatDate(dateString: string): string {
        const date = new Date(dateString); //date object

        //format options for date display
        const options: Intl.DateTimeFormatOptions = {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        };

        const datePart = date.toLocaleDateString('en-US', options); //set date part of datetime
        const timePart = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }); //set time part of datetime
        return `${datePart} at ${timePart}`; //combine output for display
    }


    return (
                <div id="wd-assignments">
        
                    <br />
                    <AssignmentsControls/> 
                    <br />
                
        
        
                    <ul id="wd-modules" className="list-group rounded-o">
                        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            
                            <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex align-items-center flex-grow-1">
                                <BsGripVertical className="me-2 fs-3" />
                                <BiSolidDownArrow className="me-2 fs-6" />
        
                                <div>
                                ASSIGNMENTS
                                </div>
        
                                <div className="d-flex justify-content-end flex-grow-1" >
                                    <div className="bg-solid-border bg-round-corner me-2 p-1 ps-2 pe-2 wd-border-gray ">
                                        40% of Total
                                    </div>
                                </div>
        
                                <AssignmentHeaderIcons/>
                            </div>
                
        
        
        
                            <ul id="wd-assignment-list" className="list-group rounded-o  gr-left-border" >

                                {assignments
                                .filter((assignment) => assignment.course === cid)
                                .map(assignment => (                                
                                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex flex-row align-items-center ">
                                    
                                    <div className="d-flex align-items-center flex-grow-1">
                                        <AssignmentStartIcons />
                                        <div id="assignment-text" >


                                            <Link 
                                                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                                                className="wd-assignment-link hidden-hyperlink">
                                                {assignment.title}
                                            </Link>

                                        
                                            <br 
                                            /> <span className="text-danger" >Multiple Modules </span> | <strong>Not available until</strong> {formatDate(assignment.startDate)} | <br
                                            /><strong>Due</strong> {formatDate(assignment.dueDate)} | {assignment.points} pts         
                                        </div>    
                                    </div>
        
                                    <div className="d-flex justify-content-end align-items-center" >
                                        <LessonControlButtons />
                                    </div>
                                </li>
                                ))}
        
        
                            
        
        
                                
                            </ul>
                        </li>
                    </ul>
             </div>
        );}
        
        



{/* //     return (
//         <div id="wd-assignments">

//             <br />
//             <AssignmentsControls/> 
//             <br />
        


//             <ul id="wd-modules" className="list-group rounded-o">
//                 <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    
//                     <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex align-items-center flex-grow-1">
//                         <BsGripVertical className="me-2 fs-3" />
//                         <BiSolidDownArrow className="me-2 fs-6" />

//                         <div>
//                         ASSIGNMENTS
//                         </div>

//                         <div className="d-flex justify-content-end flex-grow-1" >
//                             <div className="bg-solid-border bg-round-corner me-2 p-1 ps-2 pe-2 wd-border-gray ">
//                                 40% of Total
//                             </div>
//                         </div>

//                         <AssignmentHeaderIcons/>
//                     </div>
        



//                     <ul id="wd-assignment-list" className="list-group rounded-o  gr-left-border" >
                        
//                         <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex flex-row align-items-center ">
                            
//                             <div className="d-flex align-items-center flex-grow-1">
//                                 <AssignmentStartIcons />
//                                 <div id="assignment-text" >
//                                     <a className="wd-assignment-link hidden-hyperlink" 
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         A1
//                                     </a>
//                                     <br 
//                                     /> <span className="text-danger" >Multiple Modules </span> | <strong>Not available until</strong> May 6 at 12:00am | <br
//                                     /><strong>Due</strong> May 13 at 11:59pm | 100 pts         
//                                 </div>    
//                             </div>

//                             <div className="d-flex justify-content-end align-items-center" >
//                                 <LessonControlButtons />
//                             </div>
//                         </li>


//                         <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex flex-row align-items-center ">

//                             <div className="d-flex align-items-center flex-grow-1">
//                                 <AssignmentStartIcons />
//                                 <div id="assignment-text" >
//                                     <a className="wd-assignment-link hidden-hyperlink"
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         A2
//                                     </a>
//                                     <br />
//                                     <span className="text-danger" >Multiple Modules </span> | <strong>Not available until</strong> May 13 at 12:00am | <br
//                                     /><strong>Due</strong> May 20 at 11:59pm | 100 pts
//                                  </div>    
//                             </div>

//                             <div className="d-flex justify-content-end align-items-center" >
//                                 <LessonControlButtons />
//                             </div>
//                         </li>


//                         <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex flex-row align-items-center ">

//                             <div className="d-flex align-items-center flex-grow-1">
//                                 <AssignmentStartIcons />
//                                 <div id="assignment-text" >
//                                     <a className="wd-assignment-link hidden-hyperlink"
//                                         href="#/Kanbas/Courses/1234/Assignments/123">
//                                         A3
//                                     </a>
//                                     <br />
//                                     <span className="text-danger" >Multiple Modules </span> | <strong>Not available until</strong> May 20 at 12:00am | <br 
//                                     /><strong>Due</strong> May 27 at 11:59pm | 100 pts
//                                 </div>    
//                             </div>

//                             <div className="d-flex justify-content-end align-items-center" >
//                                 <LessonControlButtons />
//                             </div>
//                         </li>
                    
//                     </ul>
//                 </li>
//             </ul>
//      </div>
// );}

  */}