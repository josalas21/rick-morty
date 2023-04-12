import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";

function Layout() {
  return (
    <div className="h-screen bg-[#EBEEF2]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
