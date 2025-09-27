import connectDB from "../config/db.js";

import Department from "../models/departments.models.js";
import Semester from "../models/semester.models.js";
import Student from "../models/students.models.js";
import Room from "../models/rooms.models.js";

const runSeed = async () => {
  await connectDB();

  try {
    console.log("🌱 Starting Seeding...");

    await Department.deleteMany();
    await Semester.deleteMany();
    await Student.deleteMany();
    await Room.deleteMany();

    const cs = await Department.create({ name: "Computer Science" });

    const sem1 = await Semester.create({
      department: cs._id,
      title: "1st Semester",
      code: "CS101",
      examDate: new Date("2025-12-01"),
    });

    const sem2 = await Semester.create({
      department: cs._id,
      title: "2nd Semester",
      code: "CS102",
      examDate: new Date("2025-12-02"),
    });

    await Student.create([
      { semester: sem1._id, rollNo: "CS101-001", fullName: "Ahmed" },
      { semester: sem1._id, rollNo: "CS101-002", fullName: "Ayaan" },
      { semester: sem2._id, rollNo: "CS102-001", fullName: "Hamza" },
    ]);

    await Room.create({
      code: "R101",
      name: "Main Hall",
      capacity: 50,
      rows: 5,
      cols: 10,
    });

    console.log("✅ Seeding Complete!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error in seeding:", error.message);
    process.exit(1);
  }
};

runSeed();
