import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";


export default function PeopleDetails({ fetchUsers }:
    { fetchUsers: () => void; }) {

    const navigate = useNavigate();  
    const { uid, cid } = useParams(); //parse cid and uid
    const [user, setUser] = useState<any>({}); // user constant and mutator

    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid); // delete user based on uid
        fetchUsers(); // let fetch user know delete has happened and list is new
        navigate(`/Kanbas/Courses/${cid}/People`);
 
    };

    const fetchUser = async () => {
        if (!uid) return; // return if no uid

        const user = await client.findUserById(uid); //else set user constant to user pulled from server via their id
        setUser(user);
    };

    useEffect(() => {
        if (uid) fetchUser(); // if given a uid, fetch the user (use fetchUser fn on (re-)load)
    }, [uid]); // uid is dependency, so will reload if click on new user while modal is up

    if (!uid) return null; // if no uid, component does not render on screen

    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">

        {/* close icon that navigates back to same broader people page  */}
        <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0 wd-close-details">
            <IoCloseSharp className="fs-1" /> </Link> 

        <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />

        <div className="text-danger fs-4 wd-name"> {user.firstName} {user.lastName} </div>

        <b>Roles:</b>           <span className="wd-roles">         {user.role}         </span> <br />
        <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
        <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
        <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span> 
        
        
        <hr />
        <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
        <button onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)}
                className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel 
        </button>

        
        </div> 



    ); 
}