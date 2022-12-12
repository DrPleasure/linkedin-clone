
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import NotFound from "./components/NotFound"
import Contact from "./components/Contact";

function App() {
  return (
       
    <div className="App">
      <BrowserRouter> 
      <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<NotFound />} /> 
      </Routes>
      </BrowserRouter>
    </div>
   

  );
}

export default App;
