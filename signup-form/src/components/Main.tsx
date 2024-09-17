import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";

function Main() {
  return (
    <div>
      <div className="navbar">{/* <Nav /> */}</div>
      {/* {user ? ( */}
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
      {/* ) : (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )} */}
      <div className="footer">{/* <Footer /> */}</div>
    </div>
  );
}

export default Main;
