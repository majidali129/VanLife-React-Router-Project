import React from "react";
import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
    <Outlet/>
      <nav>
        <ul>
          <Link to="/host">DashBoard</Link>
          <Link to="/host/income">Income</Link>
          <Link to="/host/reviews">Reviews</Link>
        </ul>
      </nav>
    </>
  );
};

export default HostLayout;
