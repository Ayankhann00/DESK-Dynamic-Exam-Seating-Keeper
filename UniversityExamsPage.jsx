import React from "react";
import { FaTrash } from "react-icons/fa";

function UniversityExamsPage() {
  return (
    <div className="content">
      <div className="exam-controls">
        <div className="dropdown-label">
          <label>Select Semester</label>
          <select>
            <option value="7">Semester 7</option>
            <option value="6">Semester 6</option>
            <option value="5">Semester 5</option>
          </select>
        </div>

        <div className="dropdown-label">
          <label>Examinee Details</label>
          <input type="file" />
        </div>

        <button className="upload-btn">UPLOAD FILE</button>
      </div>

      <div className="Room">
        <h1>ADD SLOTS</h1>
        <div className="add-room-form">
          <div className="inputs">
            <input type="date" placeholder="dd-mm-yyyy" />
            <select>
              <option value="FN">FN</option>
              <option value="AN">AN</option>
            </select>
            <select>
              <option value="CS">CS</option>
              <option value="EE">EE</option>
              <option value="ME">ME</option>
            </select>
            <select>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            <select>
              <option value="CST 402">CST 402</option>
              <option value="MAT 203">MAT 203</option>
            </select>
            <button className="btn-add">ADD</button>
          </div>
        </div>
      </div>

      <div className="available-rooms">
        <h1>EXAM SCHEDULES</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Semester</th>
              <th>Branch</th>
              <th>Slot</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/07/2023</td>
              <td>FN</td>
              <td>3</td>
              <td>CS</td>
              <td>A</td>
              <td>MAT203</td>
              <td className="action-cell">
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td>12/07/2023</td>
              <td>FN</td>
              <td>3</td>
              <td>EE</td>
              <td>A</td>
              <td>MAT201</td>
              <td className="action-cell">
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="classSummary">
          <p>No of Exams scheduled: 11</p>
          <div className="summary-buttons">
            <button className="clear">CLEAR ALL</button>
            <button className="next">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversityExamsPage;
