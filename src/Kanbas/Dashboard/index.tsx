import React from 'react';
import '../styles.css';


export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses"  className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">


            <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
              <div className="card">
                <img src="/images/reactjs.jpg" className="card-img" />
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1234/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    CS1234 52323 React JS
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1234.52323.202450 <br/>
                    <span className="card-text-small">202450 Summer Full 2024 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>



            <div className="wd-dashboard-course col"  style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/apache-logo.png" className="card-img" />
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1235/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1235 Apache <br/>
                      </a>                  
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1235.52322.202450 <br/>
                    <span className="card-text-small"> 202450 Summer Full 2024 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1235/Home"  className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


            <div className="wd-dashboard-course col"  style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/wordpressLogo.png" className="card-img" />
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1236/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1236 WordPress
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1236.40955.202430 <br/>
                    <span className="card-text-small"> 202430 Spring 2024 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1236/Home"  className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


            <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/cssLogo.png" className="card-img" />
                <div  className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1237/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1237 CSS
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1237.40956.202430 <br/>
                    <span className="card-text-small"> 202430 Spring 2024 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1237/Home"  className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


            <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/htmlLogo.png" className="card-img"  />
                <div  className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1238/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1238 HTML
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1238.17388.202410 <br/>
                    <span className="card-text-small"> 202410 Fall 2023 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1238/Home"  className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


            <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/angularLogo.png" className="card-img" />
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1239/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1239 Angular
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1239.17389.202410 <br/>
                    <span className="card-text-small"> 202410 Fall 2023 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1239/Home"  className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


            <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/rubyLogo.jpeg" className="card-img"  />
                <div  className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1238/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1240 Ruby
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1240.18152.202350 <br/>
                    <span className="card-text-small"> 202350 Summer 2023 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1240/Home"  className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>
            


            <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/mongoDB_logo.jpg" className="card-img"  />
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1241/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1241 MongoDB
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1241.18156.202350 <br/>
                    <span className="card-text-small"> 202350 Summer 2023 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1241/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


            <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/mySQLLogo.jpg" className="card-img"  />
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1242/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1242 MySQL
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1242.18157.202330 <br/>
                    <span className="card-text-small"> 202330 Spring 2023 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1242/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


            <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/javascript-Logo.jpg" className="card-img"  />
                <div  className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1243/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1243 Javascript
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1243.388990.202330 <br/>
                    <span className="card-text-small"> 202330 Spring 2023 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1243/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


            <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/go-Logo.jpg" className="card-img" />
                <div  className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1244/Home" 
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1244 Go
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1244.17366.202310  <br/>
                    <span className="card-text-small"> 202310 Fall 2022 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1244/Home"  className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


            <div className="wd-dashboard-course col" style={{ width: "300px" }}> 
              <div className="card">
                <img src="/images/pythonLogo.jpg" className="card-img" />
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1245/Home" 
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1245 Python
                  </a>
                  <p className="wd-dashboard-course-title card-text truncate text-secondary">
                    CS1245.17367.202310  <br/>
                    <span className="card-text-small"> 202310 Fall 2022 Semester</span>
                  </p>
                  <a href="#/Kanbas/Courses/1245/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>


          </div>
        </div>
        <br/><br/>
      </div>
    );

}
  