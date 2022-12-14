import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import FilterUsers from "./components/FilterUsers";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/users" element={<FilterUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
