import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// starter fetch line used throughout fns
const COURSES_API = `${REMOTE_SERVER}/api/courses`;


// fetch courses from server with GET
export const fetchAllCourses = async () => {

  const { data } = await axios.get(COURSES_API);
  return data;

};


// create course fn (POST) 
// posts course to server an return response data of new course from server
export const createCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course);
    return response.data;
  };
  

// delete course fn (DELETE)
export const deleteCourse = async (id: string) => {
    const response = await axios.delete(`${COURSES_API}/${id}`);
    return response.data;
};


// update course fn (PUT)
export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
  };
  
  
  