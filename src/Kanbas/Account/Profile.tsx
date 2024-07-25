import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };


  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };

  useEffect(() => { fetchProfile(); }, []);


  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <input className="wd-username m-2" value={profile.username} placeholder="username" 
                 onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/> <br/>
          <input className="wd-password m-2" value={profile.password} placeholder="password"
                 onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/> <br/>
          <input className="wd-firstname m-2" value={profile.firstName} placeholder="first name"
                 onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/> <br/>
          <input className="wd-lastname m-2" value={profile.lastName} placeholder="last name"
                 onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/> <br/>
          <input className="wd-dob m-2" value={profile.dob}
                 onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/> <br/>
          <input className="wd-email m-2" value={profile.email} placeholder="email"
                 onChange={(e) => setProfile({ ...profile, email: e.target.value })}/> <br/>
          <select className="wd-role m-2" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select> <br/>
        </div>
      )}

        <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
            Sign out
        </button>
    </div>
  );
}
