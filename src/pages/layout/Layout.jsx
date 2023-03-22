import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div class="container mx-auto center bg-indigo-500">
      <h1>Navbar</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}

export default Layout;
