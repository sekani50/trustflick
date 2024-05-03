import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing, ContactUs, MainContainer } from "./pages";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { ToastContextProvider } from "./utils/toastContainer";
const App: FC = () => {
  return (
    <div className="App w-full h-full text-zinc-700  text-sm sm:text-base">
      <Router>
        <ToastContextProvider>
        <Routes>
          <Route element={<MainContainer />}>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
        </ToastContextProvider>
      
      </Router>
    </div>
  );
};

export default App;
