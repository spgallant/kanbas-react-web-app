import React, { useState, useEffect } from "react";
import * as client from "./client";
import { Link, useParams, useNavigate } from "react-router-dom";
import PeopleDetails from "./Details";

export default function PeopleTable() {
  const [users, setUsers] = useState<any[]>([]); // user constant and mutator

  const [role, setRole] = useState(""); // add role constant and mutator

  const [name, setName] = useState(""); // add name constant w/ mutator

  const { cid } = useParams(); //parse cid and uid

  const filterUsersByRole = async (role: string) => { //take in the role
    setRole(role); //mutate role constant to inputted role
    if (role) { // if role matches, 
      const users = await client.findUsersByRole(role); //call for users w/ matching role
      setUsers(users); // set users constant to match the filtered user list 
    } else {
      fetchUsers(); // else fetch all users
    }
  };


  const filterUsersByName = async (name: string) => {
    setName(name); 

    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };




  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    console.log('Fetched users:', users);
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  
  return (
    <div id="wd-people-table">

      <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
            className="form-control float-start w-25 me-2 wd-filter-by-name" 
      />

      <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>     <option value="FACULTY">Faculty</option>
      </select> 


      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => {
            console.log('User ID:', user._id); // Debugging step
            return (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  
                  <Link to={`/Kanbas/Courses/${cid}/People/${user._id}`} className="wd-user-link">
                    <span className="wd-first-name">{user.firstName}</span>
                    <span className="wd-last-name"> {user.lastName}</span>
                  </Link>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <PeopleDetails fetchUsers={fetchUsers} />

    </div>
  );
}
