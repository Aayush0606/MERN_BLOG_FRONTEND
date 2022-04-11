import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./Routes/Homepage";
import Blogpage from "./Routes/Blogpage";
import Newblog from "./Routes/Newblog";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog/:id" element={<Blogpage />} />
          <Route path="/blog/new" element={<Newblog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
