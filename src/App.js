import React from "react"
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Beautify from "./routes/beautify"
import Eigenface from "./routes/eigenFace"
import Fisherface from "./routes/fisherFace"
import Afalagi from "./routes/Afalagi"



function App() {
  return (
    <Router>
    <div className="App">
      
      <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/project" element ={<Project/>}/>
      <Route path="/beautify" element={<Beautify/>}/>
      <Route path="/eigenface" element={<Eigenface/>}/>
      <Route path="fisherface" element={<Fisherface/>}/>
      <Route path="/afalagi" element={<Afalagi/>}/>

      </Routes>
    
    </div>
    </Router>
   
  );
}

export default App;
