import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing, ContactUs } from "./pages";

const App: FC = () => {
  return (
    <div className="App w-full h-full text-zinc-700 text-sm sm:text-base">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
