import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Layout() {
  return (
    <div class="bg-zinc-50">
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}

export default Layout;
