import {Grid } from "@material-ui/core";
import React from "react";
import { HighlightCard } from "./HighlightCard";

export const Highlight = ({ report }) => {
  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    {
      title: " So ca nhiem",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: " So ca khoi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: " So ca tu vong",
      count: data.Deaths,
      type: "death",
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item sm={4} xs={12}>
        {summary.map((item , index) => (
          <HighlightCard key={index} title={item.title} count={item.count} type={item.type}/>
        ))}
      </Grid>
    </Grid>
  );
};
