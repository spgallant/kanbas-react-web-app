import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// starter fetch line used throughout fns
const COURSES_API = `${REMOTE_SERVER}/api/courses`;


// fetch courses from server with GET (Non-Mongo)
// export const fetchAllCourses = async () => {

//   const { data } = await axios.get(COURSES_API);
//   return data;

// };

// FIND - READ (mongo)
export const findAllCourses = async () => {
  const response = await axios.get(COURSES_API);
  return response.data;
};



// create course fn (POST) 
// posts course to server an return response data of new course from server
// export const createCourse = async (course: any) => {
//     const response = await axios.post(COURSES_API, course);
//     return response.data;
//   };


// CREATE (mongo - minor change)
export const createCourse = async (course: any) => {
  const response = await axios.post(`${COURSES_API}`, course);
  console.log("Returned Course data from server in client.ts: ", response.data);
  return response.data;
};
  

// delete course fn (DELETE)
// export const deleteCourse = async (id: string) => {
//     const response = await axios.delete(`${COURSES_API}/${id}`);
//     return response.data;
// };

// DELETE (mongo)
export const deleteCourse = async (courseId: string) => {
  const response = await axios.delete( `${COURSES_API}/${courseId}` );
  return response.data;
};



// update course fn (PUT) (unchanged for Mongo)
export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
  };
  
  
  