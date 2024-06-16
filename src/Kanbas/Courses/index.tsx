import React from 'react';

import { courses } from "../Database";
import { FaAlignJustify } from 'react-icons/fa';
import { Navigate, Route, Routes} from "react-router";
import { useParams, useLocation } from "react-router-dom";

import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";



export default function Courses() {

    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);
    

    

    console.log("CID:", cid);
    console.log("Course:", course);

    return (
      <div id="wd-courses">
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name} &gt; {pathname.split("/")[4]}
        </h2>
        <hr />
     
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CoursesNavigation />
          </div>

          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route path="Assignments/:id" element={<AssignmentEditor/>} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
          
        </div>

      </div>
  );}
  