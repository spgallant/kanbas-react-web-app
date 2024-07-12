import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// initial find route for courses
const COURSES_API = `${REMOTE_SERVER}/api/courses`;



// create new module w/ POST
// new module in body and encode courseID in path (for server)
// response data from server contains the new module; append new mod to cached modules in reducer
export const createModule = async (courseId: string, module: any) => {
    const response = await axios.post( `${COURSES_API}/${courseId}/modules`, module );
    return response.data;
  };
  

// from there, find route for modules (modules tied to a course)
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
