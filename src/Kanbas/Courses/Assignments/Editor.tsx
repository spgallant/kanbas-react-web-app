

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container">

        <div className="mb-4">
            <label htmlFor="wd-name" className="form-label"> Assignment Name </label>
        
            <input id="wd-name" className="form-control form-control-lg" defaultValue="A1" />
        </div>

        <div className="mb-4">
            <textarea id="wd-description"  className="form-control text-area-height" >
            The assignment is available online 
                    
            Submit a link to the landing page of your Web application running on Netlify.
            The landing page should include the following: - Your full name and section 
            - Links to each of the lab assignments - Link to the Kanbas application 
            - Links to all relevant source code repositories
            The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
        </div>
 
        

        
        <div className="row justify-content-end align-items-center mb-3">
            <div className="col-4 text-end">
                <label htmlFor="wd-points" className="form-label">Points</label>
            </div>
            <div className="col-8">
                <input id="wd-points" className="form-control" defaultValue={100} />
            </div>
        </div>

        <div className="row justify-content-end align-items-center mb-3">
            <div className="col-4 text-end">
                <label htmlFor="wd-group" className="form-label">Assignment Group</label>
            </div>
            <div className="col-8">
                <select id="wd-group" className="form-select">
                    <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                </select>
            </div>
        </div>


        <div className="row justify-content-end align-items-center mb-3">
            <div className="col-4 text-end">
                <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
            </div>
            <div className="col-8">
                <select id="wd-display-grade-as" className="form-select">
                    <option selected value="PERCENTAGE">PERCENTAGE</option>
                    <option value="NUMBER">NUMBER</option>
                </select>
            </div>
        </div>


        <div className="row justify-content-end align-items-start mb-3">
            <div className="col-4 text-end">
                <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
            </div>
            <div className="col-8 " >
                <div className="card">
                    <div className="card-body ">
                        <div className="mb-3 narrow-element">
                            <select id="wd-submission-type" className="form-select">
                                <option selected value="ONLINE">Online</option>
                                <option value="MANUAL">In-person</option> 
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="fw-bold">Online Entry Options</label><br/><br/>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-text-entry"/>
                                <label htmlFor="wd-text-entry">Text Entry</label><br/><br/>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-website-url"/>
                                <label htmlFor="wd-website-url">Website URL</label><br/><br/>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-media-recordings"/>
                                <label htmlFor="wd-media-recordings">Media Recordings</label><br/><br/>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-student-annotation"/>
                                <label htmlFor="wd-student-annotation">Student Annotation</label><br/><br/>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-file-upload"/>
                                <label htmlFor="wd-file-upload">File Uploads</label><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="row justify-content-end align-items-start mb-5">
            <div className="col-4 text-end">
                <label htmlFor="wd-assign-to" className="form-label mb-1">Assign </label>
            </div>
            <div className="col-8 ">
                <div className="card">
                    <div className="card-body ">
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to" className="fw-bold mb-1">Assign to </label><br/>
                            <input id="wd-assign-to" className="form-control" placeholder="Everyone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-due-date" className="fw-bold mb-1">Due </label><br/>
                            <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue="2024-05-13T23:59"/><br/>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="wd-available-from" className="fw-bold mb-1">Available from </label><br />
                                <input type="datetime-local" id="wd-available-from" className="form-control" defaultValue="2024-05-06T00:00"/>
                            </div>
                            <div className="col"> 
                                <label htmlFor="wd-available-until" className="fw-bold mb-1">Until </label><br />
                                <input type="datetime-local" id="wd-available-until" className="form-control" defaultValue="2024-05-20T23:59"/>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        
        <hr />

        <div className="row justify-content-end mb-5">
            <div className="col-auto ">
                <button id="wd-button-cancel" className="btn btn-secondary btn-sm me-1">Cancel</button>
        
                <button id="wd-button-save" className="btn btn-danger btn-sm me-1">Save</button>
            </div>
        </div>
 


      </div>
  );}
  