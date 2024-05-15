
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name </label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
            <tr>
                <br/>
            </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <br/>
          </tr>

          {/* Complete on your own */}
          <tr>
            <label htmlFor="wd-group">Assignment Group </label>
            <select id="wd-group">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
            </select>
          </tr>
          <tr>
            <br/>
          </tr>
          <tr>
            <label htmlFor="wd-display-grade-as">Display Grade as </label>
            <select id="wd-display-grade-as">
                <option selected value="PERCENTAGE">Perecentage</option>
                <option value="NUMBER">NUMBER</option>
            </select>
          </tr>
          <tr>
            <br/>
          </tr>
          <tr>
            <label htmlFor="wd-submission-type">Submission Type </label>
            <select id="wd-submission-type">
                <option selected value="ONLINE">Online</option>
                <option value="MANUAL">Manual</option>
                
            </select>
          <tr>
          </tr>
            <br/>
          </tr>
          <tr>
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
            <label htmlFor="wd-file-upload">File Upload</label>
            
        </tr>
        <tr>
            <br/>
          </tr>





          #TODO
        <tr>
            <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
            
            <input type="date"
            id="wd-text-fields-dob"
            value="2000-01-21"/><br/>

          </tr>
        </table>
      </div>
  );}
  