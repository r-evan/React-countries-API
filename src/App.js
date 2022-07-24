import Nav from "./components/Nav"
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Country from './components/Country';
import Home from './components/Home';
import axios from 'axios';


function App() {
  const [dark, setDark] = useState(true);
  const [data, setData] = useState([]);

  const handleTheme = () => {
    setDark(!dark);
  }

  useEffect(() => {
    axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data));
}, []);

const getData = () => {
  return data
}

  return (
    <div className={dark ? "light" : "dark"}>
      <Nav handleTheme={handleTheme} theme={dark} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route exact path="/Country/:name" element={<Country getData={getData} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
