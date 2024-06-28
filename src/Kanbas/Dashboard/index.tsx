import React, {useState} from 'react';
import '../styles.css';
import { Link } from "react-router-dom";
import * as db from "../Database";




export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {
  
    // const [courses, setCourses] = useState(db.courses);

    // const [course, setCourse] = useState<any>({
    //   _id: "0", name: "New Course", number: "New Number",
    //   startDate: "2023-09-10", endDate: "2023-12-15",
    //   imageName: "reactjs.jpg", description: "New Description"
    // });

    // const addNewCourse = () => {
    //   const newCourse = { ...course,
    //                       _id: new Date().getTime().toString() };
    //   setCourses([...courses, { ...course, ...newCourse }]);
    // };
  
    // const deleteCourse = (courseId: string) => {
    //   setCourses(courses.filter((course) => course._id !== courseId));
    // };

    // const updateCourse = () => {
    //   setCourses(
    //     courses.map((c) => {
    //       if (c._id === course._id) {
    //         return course;
    //       } else {
    //         return c;
    //       }
    //     })
    //   );
    // };
  
  



    console.log(courses);

    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

        <h5>New Course
          <button 
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse} > 
            Add 
          </button> 

          <button 
            className="btn btn-warning float-end me-2"
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>

        </h5>

        <br />
        
        <div className="col">
          <div className="card">
            <div className="card-body ">

              <div className="mb-3">
                <label htmlFor="wd-name-dash" className="fw-bold mb-1">Course Name </label><br/>
                <input value={course.name} className="form-control mb-2" id="wd-name-dash"
                  onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
              </div>
              <div className="mb-3">
                <label htmlFor="wd-description-dash" className="fw-bold mb-1">Description</label><br/>
                <textarea value={course.description} className="form-control" id="wd-description-dash"
                  onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
              </div>
              <div className='row'>
                <div className="mb-3 col">
                  <label htmlFor="wd-id-dash" className="fw-bold mb-1">Course Number </label><br/>
                  <input value={course.number} className="form-control mb-2" id="wd-id-dash"
                    onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
                </div>
                <div className="mb-3 col">
                  <label htmlFor="wd-image-dash" className="fw-bold mb-1">Course Image </label><br/>
                  <input value={course.imageName} className="form-control mb-2" id="wd-image-dash"
                    onChange={(e) => setCourse({ ...course, imageName: e.target.value }) }/>
                </div>
              </div>
              <div className='row'>
                <div className="mb-3 col">
                  <label htmlFor="wd-available-from-dash" className="fw-bold mb-1">Available From </label><br/>
                  <input type="datetime-local" id="wd-available-from-dash" className="form-control mb-2" value={course.startDate}
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                </div>
                <div className="mb-3 col">
                  <label htmlFor="wd-due-date-dash" className="fw-bold mb-1">Due Date </label><br/>
                  <input type="datetime-local" id="wd-due-date-dash" className="form-control mb-2" value={course.dueDate}
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
                </div>
              </div>
          
            </div>
          </div>
        </div>
        <hr />




        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> 
        <hr />
        <div id="wd-dashboard-courses"  className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">

            {courses.map((course) => (

              <div key={course._id} className="wd-dashboard-course col m-3"  style={{ width: "300px" }}>
                <Link 
                  to={`/Kanbas/Courses/${course._id}/Home`} 
                  className="text-decoration-none" 
                >
                  <div className="card rounded-3 overflow-hidden">
                    <img src={`/images/${course.imageName}`} height="{160}" width="{160}" alt={course.name} />
                    <div className="card-body">
                      <span className="wd-dashboard-course-link"
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                        {course.name}
                      </span>
                      <p className="wd-dashboard-course-title card-text" style={{maxHeight: 53, overflow: "hidden"}}>
                        {course.description}
                      </p>

                      <Link to={`/Kanbas/Courses/${course._id}/Home`}  className="btn btn-primary"> Go </Link>


                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                        }} 
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button>

                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>






                    </div>
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>
        <br/><br/>
        
      </div>
    );

}
  