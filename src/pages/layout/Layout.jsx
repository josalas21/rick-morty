import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";

function Layout() {
  return (
    <div class="h-screen bg-[#8d99ae]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
