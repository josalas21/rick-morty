import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  CharactersPage,
  LocationsPage,
  HomePage,
  Layout,
  EpisodesPage,
  ErrorPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="episodes" element={<EpisodesPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
