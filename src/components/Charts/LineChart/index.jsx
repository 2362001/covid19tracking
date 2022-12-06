import HighchartsReact from "highcharts-react-official";
import React, { useState } from "react";
import HighChart from "highcharts";
import { useEffect } from "react";

const generateOptions = (data) => {
  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tong ca nhiem",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: "<span></span>",
    },

    series: [
      {
        name: "Tong ca nhiễm",
        data: data.map(),
      },
    ],
  };
};

export const LineChart = ({ data }) => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions(generateOptions(data));
  }, [data]);

  return (
    <div>
      <HighchartsReact highcharts={HighChart} options={options} />
    </div>
  );
};
