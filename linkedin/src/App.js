
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import NotFound from "./components/NotFound"
function App() {
  return (
       
    <div className="App">
      <BrowserRouter> 
      <Routes>
      <Route path="/" element={<ProfilePage />} />
       <Route path="*" element={<NotFound />} /> 
      </Routes>
      </BrowserRouter>
    </div>
   

  );
}

export default App;
