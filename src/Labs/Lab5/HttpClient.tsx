import React, { useEffect, useState } from "react";
import * as client from "./client";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState(""); //when clicking button to retrieve message
  const [welcomeOnLoad, setWelcomeOnLoad] = useState(""); //when want message to be retrieve upon page load


  //initial use of client.ts to fetch message upon click
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);

  };

  // use of client.ts to fetch message upon load
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };

  //useEffect hook to invoke the fetchWelcome on Load
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);





  return (
    <div>
        <h3>HTTP Client</h3> <hr />

        <h4>Requesting on Click</h4>
        <button className="btn btn-primary m-2" onClick={fetchWelcomeOnClick}>
            Fetch Welcome
        </button> <br />

        Response from server: <b>{welcomeOnClick}</b>
        <hr />
        



        
        <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
        <hr />    
    
    </div>



  );
}
