import React from 'react';
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";

import * as db from "./Database";
import { useState } from "react";

import store from "./store";
import { Provider } from "react-redux";



export default function Kanbas() {

    const [courses, setCourses] = useState<any[]>(db.courses); //line to fetch courses

    const [course, setCourse] = useState<any>({
      _id: "1234", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15", imageName: "reactjs.jpg",
      description: "New Description",
    });

    const addNewCourse = () => {
      setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };

    const deleteCourse = (courseId: any) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };




    

    return (
      <Provider store={store}>
        <div id="wd-kanbas" >

          <div className="d-flex h-100 ">
            <div className="d-none d-md-block bg-black">
              <KanbasNavigation />
            </div>
            
            <div className="flex-fill p-4">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={
                  <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
                } />
                <Route path="Courses/:cid/*" element={
                  <Courses courses={courses}/>} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
          </div>

        </div>
      </Provider>

      
  );}
  
  