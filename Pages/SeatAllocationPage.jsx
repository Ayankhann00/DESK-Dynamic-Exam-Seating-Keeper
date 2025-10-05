import React from "react";

function SeatAllocationPage() {
  const rooms = [
    { id: "M111", seats: 30 },
    { id: "M105", seats: 30 },
    { id: "M113", seats: 30 },
    { id: "M204", seats: 30 },
    { id: "M205", seats: 30 },
    { id: "M207", seats: 30 },
    { id: "M209", seats: 30 },
    { id: "M213", seats: 30 },
    { id: "209", seats: 30 },
    { id: "211", seats: 30 },
    { id: "401", seats: 30 },
    { id: "404", seats: 30 },
    { id: "502", seats: 30 },
    { id: "503", seats: 30 },
    { id: "505", seats: 30 },
    { id: "M229", seats: 30 },
    { id: "M211", seats: 30 },
    { id: "403", seats: 30 },
    { id: "506", seats: 60 },
    { id: "212", seats: 60 },
  ];

  return (
    <div className="content">
      <div className="allocation-controls">
        <div>
          <label>SELECT DATE</label>
          <input type="date" defaultValue="2023-07-12" />
        </div>
        <div>
          <label>SELECT TIME</label>
          <select>
            <option value="FN">FN</option>
            <option value="AN">AN</option>
          </select>
        </div>
        <div>
          <label>EXAMS SCHEDULED</label>
          <select>
            <option value="S3-CS-A">S3-CS-A</option>
          </select>
        </div>
      </div>
      <h2 className="section-title">SELECT EXAM HALLS</h2>
      <div className="exam-halls">
        <input type="text" placeholder="Search" className="search-input" />
        <select className="sort-select">
          <option>Increasing capacity</option>
          <option>Decreasing capacity</option>
        </select>
      </div>

      <div className="hall-grid">
        {rooms.map((room) => (
          <div key={room.id} className="hall-card">
            <p>{room.id}</p>
            <span>{room.seats}</span>
          </div>
        ))}
      </div>

      <div className="stats">
        <h3>STATISTICS</h3>
        <p>Total Rooms : 20</p>
        <p>Available Seats : 660</p>
        <p>Rooms Selected : 0</p>
        <p>Seats Selected : 0</p>
        <p>Total Participants : 541</p>
      </div>

      <div className="allocation-buttons">
        <button className="arrange-btn">ARRANGE</button>
        <button className="mail-btn">RECEIVE MAIL</button>
      </div>
    </div>
  );
}

export default SeatAllocationPage;
