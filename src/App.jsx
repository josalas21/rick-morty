import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters, Locations, Home, Layout, Episodes, Error } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="locations" element={<Locations />} />
        <Route path="episodes" element={<Episodes />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
