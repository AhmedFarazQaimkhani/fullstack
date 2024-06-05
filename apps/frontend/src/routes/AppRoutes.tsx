import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

export default function Index(props: {
  isLoggedIn: boolean;
  setLoggedIn: () => void;
}) {
  const { isLoggedIn, setLoggedIn } = props;
  return (
    <div>
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            <Route path="/home" element={<Dashboard />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<SignIn setIsLoggedIn={setLoggedIn} />}
            ></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}
