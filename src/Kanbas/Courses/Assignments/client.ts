import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// initial find route for courses
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// from there, find route for assignment (assignments tied to a course)
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};
