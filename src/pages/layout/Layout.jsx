import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";

function Layout() {
  return (
    <div class="h-screen bg-stone-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
