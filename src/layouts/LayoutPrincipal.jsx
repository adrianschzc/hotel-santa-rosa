import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function LayoutPrincipal() {
  return (
    <div className="">
      <Navbar />
      <div className="h-[90vh] overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutPrincipal;
