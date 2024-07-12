import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// initial find route for courses
const COURSES_API = `${REMOTE_SERVER}/api/courses`;



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
