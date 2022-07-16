import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About.js";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post/:slug" element={<SinglePost />} />
        <Route path="post" element={<Post />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
