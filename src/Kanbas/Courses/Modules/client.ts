import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// initial find route for courses
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// initial find route for a module
const MODULES_API = `${REMOTE_SERVER}/api/modules`;


// UPDATE (unchanged for mongo)
// update a module with PUT
// embeds module id in thh path and updates http body w/ info
export const updateModule = async (module: any) => {
    const response = await axios.
      put(`${MODULES_API}/${module._id}`, module);
    return response.data; // status code from server
};
  

// DELETE (unchanged for Mongo)
// delete a module with DELETE
// sends HTTP DELETE request to server encoding module's id path
export const deleteModule = async (moduleId: string) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);

  return response.data; // respond with status code
};


// CREATE (unchanged for Mongo)
// create new module w/ POST
// new module in body and encode courseID in path (for server)
// response data from server contains the new module; append new mod to cached modules in reducer
export const createModule = async (courseId: string, module: any) => {
    const response = await axios.post( `${COURSES_API}/${courseId}/modules`, module );
    // console.log("Returned Module data from server in client.ts: ", response.data);
    return response.data;
  };
  


// FIND - READ (unchanged for Mongo)
// from there, find route for modules (modules tied to a course)
// find with GET
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
