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

import { useState } from "react";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";

import AssignmentDeleter from "./AssignmentDeleter";


export default function Assignments() {
    const {cid} = useParams();
    
    // const assignments = db.assignments;
    //const [assignments, setassignments] = useState<any[]>(db.assignments); 

    const [assignmentName, setassignmentName] = useState("");
    
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();

    const [selectedAssignment, setSelectedAssignment] = useState<any>(null); //manage state of selected assignment for delete
    
    // defaults for a new assignment
    const [assignment, setAssignment] = useState({
        _id:  new Date().getTime().toString(),
        title: "New Assignment",
        description: "A new assignment",
        points: 100,
        dueDate: "",
        startDate: "2024-05-06T00:00",
    });

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
                    {/* Add Group and Add Assignment buttons, w/ addAssignment functionality */}
                    <AssignmentsControls
                        setassignmentName={setassignmentName}
                        assignmentName={assignmentName}
                        addAssignment={() => {
                            dispatch(addAssignment({ ...assignment, title: assignmentName, course: cid }));
                            setassignmentName("");
                        }}
                        /> 
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
                                .filter((assignment: any) => assignment.course === cid)
                                .map((assignment: any) => {
                                    console.log("Assignment ID: ", assignment._id);
                                    console.log("Assignment Name: ", assignment.title);
                                    return(                                
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
                
                                            {/* includes assignment delete w/ set for selected assignment for deletion */}
                                            <div className="d-flex justify-content-end align-items-center" >
                                                <LessonControlButtons
                                                    assignmentName={assignment.title}
                                                    openDeleteModal={() => setSelectedAssignment(assignment)}
                                                
                                                    />
                                            </div>
                                        </li>
                                    )
                                })}       
                                
                            </ul>
                        </li>
                    </ul>

                    {/* details for modal dialog with check for selected assignment to delete as trigger */}
                    <AssignmentDeleter
                        dialogTitle="Delete Assignment"
                        assignmentName={selectedAssignment ? selectedAssignment.title : ''}
                        deleteAssignment={() => {
                            if (selectedAssignment) {
                                dispatch(deleteAssignment(selectedAssignment._id));
                                setSelectedAssignment(null);
                            }
                        }}
                    />
             </div>
        );}
        
        



