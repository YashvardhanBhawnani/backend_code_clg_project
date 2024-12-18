


import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import DepartmentMgmt from "./DeptMgmt";
import ProgramMgmt from "./ProgramMgmt";
import FeedbackTrack from "./FeedbackTrack";
import AlumniTrack from "./AlumniTrack";

function AdminHome() {
    return (
        <div>
            <center>
                <br />
                <br />
                <h1 style={{backgroundColor:"green", color:"white"}}>Admin Home Page</h1>
                <nav>
                    <Link to="departmentmgmt" className="forms">Department</Link>
                    <span> </span>
                    <Link to="programmgmt" className="forms">Program</Link>
                    <span> </span>
                    <Link to="feedbacktrack" className="forms">Feedback</Link>
                    <span> </span>
                    <Link to="alumnitrack" className="forms">Alumni</Link>
                    </nav>
                <Routes>
                    <Route path="departmentmgmt" element={<DepartmentMgmt />} />
                    <Route path="programmgmt" element={<ProgramMgmt />} />
                    <Route path="feedbacktrack" element={<FeedbackTrack />} />
                    <Route path="alumnitrack" element={<AlumniTrack />} />
                </Routes>
                {/* <Outlet /> */}
            </center>
        </div>
    );
}

export default AdminHome;
