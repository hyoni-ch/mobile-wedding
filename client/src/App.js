import "./App.css";

import Layout from "./components/Layout";
import RsvpList from "./components/section/Attend/List";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/rsvp" element={<RsvpList />} />
      </Routes>
    </div>
  );
}

export default App;
