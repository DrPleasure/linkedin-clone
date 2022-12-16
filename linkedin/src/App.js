import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import ProfileViewUser from "./components/ProfileViewUser";
import ProfileUser from "./components/ProfileUser";
import PictureProfileUpload from "./components/Form";
import Form from "./components/Form";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Profile/me" element={<ProfilePage />} />
          <Route path="/Profile/:userid" element={<ProfileViewUser />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
