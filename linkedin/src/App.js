import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import ProfileViewUser from "./components/ProfileViewUser";
import ProfileUser from "./components/ProfileUser";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Profile/me" element={<ProfilePage />} />
          <Route path="/Profile/user" element={<ProfileViewUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
