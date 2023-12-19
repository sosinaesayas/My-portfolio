import React from "react"
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/footer"

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/project" element ={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </div>
    </Router>
   
  );
}

export default App;
