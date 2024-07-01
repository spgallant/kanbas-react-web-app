import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

import AssignmentDeleter from "./AssignmentDeleter";
import { deleteAssignment } from "./reducer";


export default function LessonControlButtons(
    {assignmentName, openDeleteModal}:
    {assignmentName: string; openDeleteModal: () => void;}) {


    console.log("LCB Assignment Name: ", assignmentName);


  return (
    <div className="float-end">
      
      <FaTrash 
        className="text-danger me-2 mb-1"
        id="wd-delete-assignment-btn"
        data-bs-toggle="modal" 
        data-bs-target="#wd-delete-assignment-dialog"
        onClick={openDeleteModal}
        // onClick={deleteAssignment}
        
        />

        {/* <AssignmentDeleter
          dialogTitle="Delete Assignment"
          assignmentName={assignmentName}
          deleteAssignment={deleteAssignment}
        /> */}

      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
