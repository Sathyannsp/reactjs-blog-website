import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          exact
          element={user ? <Home /> : <Register />}
        />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" exact element={user ? <Write /> : <Register />} />
        <Route
          path="/settings"
          exact
          element={user ? <Settings /> : <Register />}
        />
        <Route path="/post/:postId" exact element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
