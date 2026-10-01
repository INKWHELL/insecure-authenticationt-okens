import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from '../pages/Start.jsx';
import Home from '../pages/Home.jsx';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;