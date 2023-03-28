import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

function Layout() {
  return (
    <div class="h-screen bg-stone-800">
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}

export default Layout;
