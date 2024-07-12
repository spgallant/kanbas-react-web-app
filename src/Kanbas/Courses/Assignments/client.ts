import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// initial find route for courses
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// initial find route for an assignment
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;


// update an assignment with PUT
// embeds assignment id in the path and updates http body w/ info
export const updateAssignment = async (assignment: any) => {
    const response = await axios.
      put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
      
    return response.data; // status code from server
};



// delete an assignment with DELETE
// sends HTTP DELETE request to server encoding assignment's id path
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios
    .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    
  return response.data; // respond with status code
};



// create new assignment w/ POST
// new assignment in body and encode courseID in path (for server)
// response data from server contains the new assign.; append new assign to cached assigns. in reducer
// link may need to have ~/assignments/:aid
export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post( `${COURSES_API}/${courseId}/assignments`, assignment );
    return response.data;
  };
 



// from there, find route for assignment (assignments tied to a course)
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};
