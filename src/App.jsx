import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Componets/Nav";
import Home from "./Componets/Home";
import Save from "./Componets/Save";

function App() {
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("web");
  const [saved, setSaved] = useState([]);

  const API_KEY = "5vnC1jmFS5TjASyG5PFKAxlNimhXSHtBlm9BEjJfAcnk4WvsJAVgdPuy";
  useEffect(() => {
    const fatchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      // console.log(res.data.photos);
      setImage(res.data.photos);
      console.log(image);
    };
    const data = JSON.parse(localStorage.getItem("Images"));
    if (data) {
      setSaved(data);
    }
    fatchImage();
  }, [search]);

  console.log(saved);

  useEffect(() => {
    if (saved.length != 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("Images", json);
    }
  }, [saved]);

  return (
    <>
      <Router>
        <Nav setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={<Home image={image} saved={saved} setSaved={setSaved} />}
          />
          <Route path="/save" element={<Save saved={saved} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
