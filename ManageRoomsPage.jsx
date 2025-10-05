import React from "react";
import { FaTrash } from "react-icons/fa";

function ManageRoomsPage() {
  return (
    <div className="content">
      <div className="Room">
        <h1>ADD ROOM</h1>
        <div className="add-room-form">
          <div className="inputs">
            <input type="text" placeholder="Enter Room No" />
            <input type="number" placeholder="Enter Floor No" />
            <div className="label">
              <label>Block:</label>
            </div>
            <select>
              <option value="Ayan">Ayan</option>
              <option value="M-Other">M-Other</option>
            </select>
            <input type="number" placeholder="Enter Available Seats" />
            <button>ADD</button>
          </div>
        </div>
      </div>

      <div className="available-rooms">
        <h1>AVAILABLE ROOMS</h1>
        <div className="table-controls">
          <input type="text" placeholder="Search Rooms" />
          <div className="entry">
            <div>
              <label>Entries</label>
              <select>
                <option value="entries">Entries</option>
              </select>
            </div>
            <div>
              <label>Filter By</label>
              <select>
                <option value="">Filter By</option>
              </select>
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Room No</th>
              <th>Floor No</th>
              <th>Block</th>
              <th>Available Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>M111</td>
              <td>1</td>
              <td>M-George</td>
              <td>30</td>
              <td className="action-cell">
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td>M105</td>
              <td>1</td>
              <td>M-George</td>
              <td>30</td>
              <td className="action-cell">
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td>M113</td>
              <td>1</td>
              <td>Ayan</td>
              <td>30</td>
              <td className="action-cell">
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td>M204</td>
              <td>2</td>
              <td>M-George</td>
              <td>30</td>
              <td className="action-cell">
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td>M205</td>
              <td>2</td>
              <td>M-George</td>
              <td>30</td>
              <td className="action-cell">
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr>
              <td>M207</td>
              <td>2</td>
              <td>M-George</td>
              <td>30</td>
              <td className="action-cell">
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="classSummary">
          <p>Total Seats Available: 180</p>
          <div className="summary-buttons">
            <button className="clear">CLEAR ALL</button>

            <button className="next">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageRoomsPage;
