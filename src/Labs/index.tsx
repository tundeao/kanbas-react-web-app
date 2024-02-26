import Assignment3 from "./a3";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import { Routes, Route, Navigate } from "react-router";
import JavaScript from "./a3/JavaScript";

function Labs() {
    return (
        <div className="container-fluid">
            <Nav />
            {/* <Assignment3 /> */}
            <Link to="/Labs/a3">Assignment 3</Link> |
            <Link to="/Labs/a4">Assignment 4</Link>
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
                {/* <Route path="/a4" element={<Assignment4 />} /> */}
            </Routes>

        </div>
    );
}

export default Labs;