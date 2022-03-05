import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchCharacters from "./pages/SearchCharacters";
import SelectCharacter from "./pages/SelectCharacter";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchCharacters />} />
          <Route path="/episodes" element={<SelectCharacter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
