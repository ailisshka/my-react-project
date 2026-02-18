import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/HomeTest.jsx";
import Login from "./pages/LoginTest.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/ProfileTest.jsx";
import Lessons from "./pages/Lessons.jsx";
import Dictionary from "./pages/Dictionary.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="profile" element={<Profile />} />
          

          {/* <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile/>
              </PrivateRoute>
            } */}
          {/* /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
