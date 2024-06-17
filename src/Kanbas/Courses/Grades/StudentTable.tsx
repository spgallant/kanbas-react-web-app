import {useParams} from "react-router";
import * as db from "../../Database";

export default function StudentTable() {
    const {cid, aid} = useParams();
    const assignments = db.assignments;
    const users = db.users;
    const enrollments = db.enrollments;
    const grades = db.grades;


    // Assignments for course; variable for re-use
    const courseAssignments = assignments.filter(assignment => assignment.course === cid);
    
    // Users for course; variable for re-use
    const userEnrollments = enrollments.filter(enrollment => enrollment.course === cid);

    const mappedUsers = userEnrollments.map(enrollment => users.find(user => user._id === enrollment.user));


    return (


        <div id="wd-grade-table" className="table-responsive" >
            
       
                <table className="table table-striped table-bordered">
          
                    <thead>
                        
                        <tr className="text-secondary">
                            <th className="text-center">Student Name</th>
                            {assignments
                                .filter(assignment => assignment.course === cid)
                                .map(assignment => (
                                    <th key={assignment._id} className="text-center">
                                        {assignment.title} Out of 100
                                    </th>   
                            ))}
                        </tr>
                    </thead>

                    <tbody>

                            {mappedUsers.map(user => (
                            <tr key={user?._id}>
                                <td className="text-danger ">
                                {user ? `${user.firstName} ${user.lastName}` : 'Unknown User'}
                                 
                                </td>

                              
                                {/* {courseAssignments.map(assignment => (

                                    
                                <td key={assignment._id} className="text-center">
                                    {grades.find(grade => grade.assignment === assignment._id && grade.student === user?._id) 
                                        ? (
                                        <>
                                            {grades.find(grade => grade.assignment === assignment._id && grade.student === user?._id).grade}
                                            <span className="input-group-text">%</span>
                                        </>
                                    ) : (
                                        '-'
                                    )}
                                </td>
                            ))} */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}