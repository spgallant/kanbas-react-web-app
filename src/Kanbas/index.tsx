import React from 'react';
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Account from './Account';
import ProtectedRoute from './ProtectedRoute';
import "./styles.css";

// import * as db from "./Database";
import * as client from "./Courses/client";

import { useState, useEffect } from "react";

import store from "./store";
import { Provider } from "react-redux";



export default function Kanbas() {

    // const [courses, setCourses] = useState<any[]>(db.courses); //line to fetch courses
    const [courses, setCourses] = useState<any[]>([]); //change to any instead of local db reference

    const [course, setCourse] = useState<any>({
      // _id: "1234", 
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15", imageName: "reactjs.jpg",
      description: "New Description",
    });



    //update a course with use of PUT
    const updateCourse = async () => {
      await client.updateCourse(course);
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
  

    // delete a course with use of DELETE
    const deleteCourse = async (courseId: string) => {
      await client.deleteCourse(courseId);
      setCourses(courses.filter(
        (c) => c._id !== courseId));
    };
  

    // add a new course with use of POST
    const addNewCourse = async () => {
      const newCourse = await client.createCourse(course);
      setCourses([ ...courses, newCourse ]);
    };
  
    // fetch all courses wtih GET
    const fetchCourses = async () => {
      // const courses = await client.fetchAllCourses();
      const courses = await client.findAllCourses();
      setCourses(courses);
    };

    // useEffect to invoke fetchCourses() upon page load
    useEffect(() => {
      fetchCourses();
    }, []);
  

    

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
                <Route path="/Account/*" element={<Account />} />

                <Route path="Dashboard" element={ <ProtectedRoute>
                  <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
                  </ProtectedRoute>
                } />
                <Route path="Courses/:cid/*" element={ <ProtectedRoute>
                  <Courses courses={courses}/> </ProtectedRoute>} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
          </div>

        </div>
      </Provider>

      
  );}
  
  