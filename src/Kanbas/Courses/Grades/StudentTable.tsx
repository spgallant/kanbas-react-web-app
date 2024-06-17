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

    // Grades for student for assignment (format as fn to take inputs at correct nest level)
    const getGrades = (userId: String, assignmentId: String) => {
        const singleGrade = grades.find(grade => grade.student === userId && grade.assignment === assignmentId);
        return singleGrade ? `${singleGrade.grade}%` : "N/A";
    };


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

                              


                                {courseAssignments.map(assignment => (
                                    <td key={assignment._id} className="text-center">
                                        {user ? getGrades(user._id, assignment._id) : "-"}
                                    </td>
                                ))}
                                


                             
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}