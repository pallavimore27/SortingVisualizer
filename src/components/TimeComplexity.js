import React from "react";
import "./TimeComplexity.css";

function TimeComplexity({ algorithm }) {
  const complexities = {
    bubble: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
    selection: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
    insertion: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
    merge: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)" },
    quick: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)" },
  };

  const data = complexities[algorithm] || {
    best: "N/A",
    average: "N/A",
    worst: "N/A",
  };

  return (
    <div className="timecomplexity">
      <h3 className="timecomplexity__title">Time Complexity</h3>
      <div className="timecomplexity__details">
        <div>Best: {data.best}</div>
        <div>Average: {data.average}</div>
        <div>Worst: {data.worst}</div>
      </div>
    </div>
  );
}

export default TimeComplexity;
