import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Application from "./components/Application";
import Status from "./components/Status";
import "./styles/header.scss";
import "./styles/applications.scss";
import "./styles/applicard.scss";
import Footer from "./components/Footer";
import SignupForm from "./components/Signup";
import LoginForm from "./components/Login";
import Pdf from "./components/Pdf";
import TeacherApplication from "./components/TeacherApplication";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacherApplication" element={<TeacherApplication />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/applicationtypes" element={<Application />} />
        <Route path="/status" element={<Status />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/pdf" element={<Pdf />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
