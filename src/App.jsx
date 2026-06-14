import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBooking from "./pages/AddBooking";
import ShowBooking from "./pages/ShowBooking";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AddBooking />} />
        <Route path="/add" element={<AddBooking />} />
        <Route path="/show" element={<ShowBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
