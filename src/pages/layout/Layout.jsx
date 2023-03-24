import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Layout() {
  return (
    <div class="bg-stone-800 h-screen">
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}

export default Layout;
