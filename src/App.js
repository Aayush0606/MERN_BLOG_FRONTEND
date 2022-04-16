import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./Routes/Homepage";
import Blogpage from "./Routes/Blogpage";
import Newblog from "./Routes/Newblog";
import Userprofile from "./Routes/Userprofile";
import Loginpage from "./Routes/Loginpage";
import Signuppage from "./Routes/Signuppage";

function App() {
  const user = false;
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog/:id" element={<Blogpage />} />
          <Route
            path="/blog/new"
            element={user ? <Newblog /> : <Loginpage />}
          />
          <Route
            path="/user"
            element={user ? <Userprofile /> : <Loginpage />}
          />
          <Route path="/login" element={user ? <Homepage /> : <Loginpage />} />
          <Route
            path="/signup"
            element={user ? <Homepage /> : <Signuppage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
