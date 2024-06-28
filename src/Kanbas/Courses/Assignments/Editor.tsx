import {useParams} from "react-router";
import * as db from "../../Database";
import { Link, useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { addAssignment, editAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";


export default function AssignmentEditor() {
    const {cid, aid} = useParams();
    const dispatch = useDispatch();
    // const assignments = db.assignments; //change me to use state
    // const assignment = db.assignments.find(assignment => assignment._id === aid);


    // State w/ default values for new assignment, w/ mutator option
    const [assignment, setAssignment] = useState({
        _id:  new Date().getTime().toString(),
        title: "New Assignment",
        description: "A new assignment",
        points: 100,
        dueDate: "",
        startDate: "2024-05-06T00:00",
    });

    // State to manage existing assignments
    const [assignments, setassignments] = useState<any[]>(db.assignments); 
  

    return (
      <div id="wd-assignments-editor" className="container">

        {assignments
        .filter((assignment) => assignment._id === aid)
        .map(assignment => (
            <div key={assignment._id}>
                <div className="mb-4">
                    <label htmlFor="wd-name" className="form-label"> Assignment Name </label>
                
                    <input id="wd-name" className="form-control form-control-lg" value={assignment.title} />
                </div>

                <div className="mb-4">
                    <textarea id="wd-description"  className="form-control text-area-height" >
                    {assignment.description}
                    </textarea>
                </div>
        
                

                
                <div className="row justify-content-end align-items-center mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col-8">
                        <input id="wd-points" className="form-control" value={assignment.points} />
                    </div>
                </div>

                <div className="row justify-content-end align-items-center mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    </div>
                    <div className="col-8">
                        <select id="wd-group" className="form-select">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </div>
                </div>


                <div className="row justify-content-end align-items-center mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                    </div>
                    <div className="col-8">
                        <select id="wd-display-grade-as" className="form-select">
                            <option selected value="PERCENTAGE">PERCENTAGE</option>
                            <option value="NUMBER">NUMBER</option>
                        </select>
                    </div>
                </div>


                <div className="row justify-content-end align-items-start mb-3">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    </div>
                    <div className="col-8 " >
                        <div className="card">
                            <div className="card-body ">
                                <div className="mb-3 narrow-element">
                                    <select id="wd-submission-type" className="form-select">
                                        <option selected value="ONLINE">Online</option>
                                        <option value="MANUAL">In-person</option> 
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="fw-bold">Online Entry Options</label><br/><br/>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="wd-text-entry"/>
                                        <label htmlFor="wd-text-entry">Text Entry</label><br/><br/>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="wd-website-url"/>
                                        <label htmlFor="wd-website-url">Website URL</label><br/><br/>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="wd-media-recordings"/>
                                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/><br/>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="wd-student-annotation"/>
                                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/><br/>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="wd-file-upload"/>
                                        <label htmlFor="wd-file-upload">File Uploads</label><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row justify-content-end align-items-start mb-5">
                    <div className="col-4 text-end">
                        <label htmlFor="wd-assign-to" className="form-label mb-1">Assign </label>
                    </div>
                    <div className="col-8 ">
                        <div className="card">
                            <div className="card-body ">
                                <div className="mb-3">
                                    <label htmlFor="wd-assign-to" className="fw-bold mb-1">Assign to </label><br/>
                                    <input id="wd-assign-to" className="form-control" placeholder="Everyone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="wd-due-date" className="fw-bold mb-1">Due </label><br/>
                                    <input type="datetime-local" id="wd-due-date" className="form-control" value={assignment.dueDate}/><br/>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="wd-available-from" className="fw-bold mb-1">Available from </label><br />
                                        <input type="datetime-local" id="wd-available-from" className="form-control" value={assignment.startDate}/>
                                    </div>
                                    <div className="col"> 
                                        <label htmlFor="wd-available-until" className="fw-bold mb-1">Until </label><br />
                                        <input type="datetime-local" id="wd-available-until" className="form-control" value={assignment.dueDate}/>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                
                <hr />

                <div className="row justify-content-end mb-5">
                    <div className="col-auto ">
                        <Link to={`/Kanbas/Courses/${cid}/Assignments`} 
                            id="wd-button-cancel" 
                            className="btn btn-secondary btn-sm me-1">
                            Cancel
                        </Link>
                        <Link to={`/Kanbas/Courses/${cid}/Assignments`} 
                            id="wd-button-save" 
                            className="btn btn-danger btn-sm me-1">
                            Save
                        </Link>
                    </div> 
                </div>
            </div>
        ))}

      </div>
  );}
  