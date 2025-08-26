/*
import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import Visuals from './Visuals';

function Home() {
  return (
    <div className="home">
       <Sidebar />
       <Visuals />
   </div>
  )
}

export default Home;

*/

import React, { useState } from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Visuals from "./Visuals";

function Home() {
  // keep algorithm in state (default: Bubble Sort)
  const [algorithm, setAlgorithm] = useState("Bubble Sort");

  return (
    <div className="home">
      {/* Pass algorithm + setAlgorithm to Sidebar */}
      <Sidebar algorithm={algorithm} setAlgorithm={setAlgorithm} />

      {/* Pass algorithm to Visuals */}
      <Visuals algorithm={algorithm} />
    </div>
  );
}

export default Home;


