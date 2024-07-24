import React from 'react';
import "./index.css";
import { courses } from "../../Database";
import { Link, useParams, useLocation } from "react-router-dom";


export default function CoursesNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades","People"];

  
    return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
          {links.map((link) => (
            <Link
              key="link" to={`/Kanbas/Courses/${course?._id}/${link}`}
              id="wd-course-home-link"
              className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
              {link}
             </Link>
                  ))}
      </div>
          );
      }
  