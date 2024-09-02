import "./App.css";
import "./SVG/SVG.css";
import Video from "./Video/Video.jsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SVGUIApp from './UITemplate/SVGUIapp.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Video />} />
          <Route path="/svguiapp" element={<SVGUIApp />} />
       </Route>
      </Routes>
    </Router>
  );
}

export default App;
