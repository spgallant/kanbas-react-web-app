import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// initial find route for courses
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// from there, find route for modules (modules tied to a course)
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
