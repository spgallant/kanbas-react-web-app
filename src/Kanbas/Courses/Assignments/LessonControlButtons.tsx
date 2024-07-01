import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

import AssignmentDeleter from "./AssignmentDeleter";
import { deleteAssignment } from "./reducer";


export default function LessonControlButtons(
    {assignmentName, openDeleteModal}:
    {assignmentName: string; openDeleteModal: () => void;}) {



  return (
    <div className="float-end">
      
      
      <FaTrash 
        className="text-danger me-2 mb-1" 
        id="wd-delete-assignment-btn" 
        data-bs-toggle="modal"  // format is modal dialog
        data-bs-target="#wd-delete-assignment-dialog" //target is id of modal dialog div
        onClick={openDeleteModal} // on click call open to delete modal
      />


      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
