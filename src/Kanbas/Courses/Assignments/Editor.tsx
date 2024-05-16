
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>   Assignment Name </strong></label>
        <br />
        <br />
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
       
        <textarea id="wd-description" cols={48} rows={10}>
          The assignment is available online Submit a link to the landing page of 
          your Web application running on Netlify. The landing page should include 
          the following: Your full name and section Links to each of the lab assignments
          Link to the Kanbas application Links to all relevant source code repositories
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        
        <table>
            <tr>
                <br/>
            </tr>

            <tr>
                <td align="right" valign="top" width="5px" >
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td >
                    <input id="wd-points" defaultValue={100} />
                </td>
            </tr>
            <tr>
                <br/>
            </tr>


          <tr>
            <td align="right" width="0px" >
                <label htmlFor="wd-group">Assignment Group </label>
            </td>
            <td >
                <select id="wd-group">
                    <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                </select>
            </td>
          </tr>

          <tr>
            <br/>
          </tr>

          <tr>
            <td align="right" width="0px" >    
                <label htmlFor="wd-display-grade-as">Display Grade as </label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option selected value="PERCENTAGE">Perecentage</option>
                    <option value="NUMBER">NUMBER</option>
                </select>
            </td>
          </tr>

          <tr>
            <br/>
          </tr>

          <tr>
            <td align="right"  width="0px" >
                <label htmlFor="wd-submission-type">Submission Type </label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option selected value="ONLINE">Online</option>
                    <option value="MANUAL">In-person</option> 
                </select>
            </td>
          </tr>

          <tr>
            <br/>
   
          </tr>

          <tr >
            <td></td>
            <td>
                <label>Online Entry Options</label><br/>

                <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-genre" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>

        <tr>
            <br/>
        </tr>

        <tr>
            <td align="right" valign="top">Assign</td>
            <td>
                <label htmlFor="wd-assign-to">Assign to </label><br/>
                <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
        </tr>

        <tr>
            <br/>
        </tr>

        <tr>
            <td></td>
            <td>
                <label htmlFor="wd-due-date">Due </label><br/>
            
                <input type="date" id="wd-due-date"
                value="2024-05-13"/><br/>
            </td>
        </tr>

        <tr>
            <br/>
        </tr>

        <tr>
            <td width={140}></td>
            <td>
                <td align="left">
                    <label htmlFor="wd-available-from">Available from </label><br />
                    <input type="date" id="wd-available-from"
                    value="2024-05-06"/>
                </td>

                <td align="left">
                    <label htmlFor="wd-available-until">Until </label><br />
                    <input type="date" id="wd-available-until"
                    value="2024-05-20"/>
                </td>
            </td>

        </tr>
        </table>

        <hr />

        <tr>
            <td width={300}></td>
            <td align="right">
                <button id="wd-button-cancel" >Cancel</button>
            </td>
            <td align="right">
                <button id="wd-button-save">Save</button>
            </td>
        </tr>

      </div>
  );}
  