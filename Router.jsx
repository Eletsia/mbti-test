import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./src/components/ProtexctedRoute";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import SignUp from "./src/pages/SignUp";
import Profile from "./src/pages/Profile";
import Test from "./src/pages/Test";
// import TestPage from "./src/pages/TestPages";
import TestResult from "./src/pages/TestResult";
import { useState } from "react";

const Router = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route path="/test" element={<Test user={user} />} />
          {/* <Route path="/testing" element={<TestPage />} /> */}
          <Route path="/results" element={<TestResult user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
