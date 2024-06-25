import React, {useState} from 'react';
import '../styles.css';
import { Link } from "react-router-dom";
import * as db from "../Database";




export default function Dashboard() {
    const [courses, setCourses] = useState(db.courses);

    const [course, setCourse] = useState<any>({
      _id: "0", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
      imageName: "reactjs.jpg", description: "New Description"
    });

    const addNewCourse = () => {
      const newCourse = { ...course,
                          _id: new Date().getTime().toString() };
      setCourses([...courses, { ...course, ...newCourse }]);
    };
  




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
        </h5>

        <br />
        <div className="card">
          <div className="card-body ">
            <input value={course.name} className="form-control mb-2" 
              onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <input value={course.number} className="form-control mb-2" />
            <input value={course.imageName} className="form-control mb-2" />
            <input type="datetime-local" id="wd-available-from" className="form-control mb-2" value={course.startDate}/>
            <input type="datetime-local" id="wd-due-date" className="form-control mb-2" value={course.dueDate}/>
            <textarea value={course.description} className="form-control"/>
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
  