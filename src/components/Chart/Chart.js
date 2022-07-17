import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map(
    (dataPoints) => dataPoints.value
  );
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          value={dataPoints.value}
          key={dataPoints.label}
          label={dataPoints.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}

export default Chart;
