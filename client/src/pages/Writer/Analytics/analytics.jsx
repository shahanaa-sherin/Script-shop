import { Grid } from "@mui/material";
import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import "./analytics.css";
import items from "./product";

function Analytics() {
  return (
    <>
      <Navbar />
      <Grid container justifyContent={"center"}>
        <Grid item md={"9"}>
          <h3 className="first-G-head-AL">Analytics</h3>
        </Grid>
        <Grid item className="second-Grid" md="9" justifyContent={"center"}>
          {items.map((item, key) => (
            <div key={key} className="second-Grid-child">
              <h3 className="second-grid-map-h3">{item.name}</h3>
              <p className="second-grid-map-p">{item.message}</p>
              <button className="second-grid-map-b">Contact Details</button>
            </div>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Analytics;
