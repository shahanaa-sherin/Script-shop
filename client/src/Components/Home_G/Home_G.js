import React from "react";
import "./Home_G.css";

import Landingimg from "../../Assets/Landing-img/landimg.png";
import Grid from "@mui/material/Grid";
import Products from "./Product.json";
import { Card } from "@mui/material";

const Home_G = () => {
  return (
    <>
      <div className="home-land-main">
        <Grid container>
          <Grid
            className="land-home-grid"
            item
            md="7"
            xs="12"
            justifyContent={"center"}
            display={"grid"}
          >
            <div className="home-div-first">
              <p className="home-div-para">
                Lorem ipsum dolor sit amet consectetur. Nisl ut lectus volutpat
                a urnac at egestas egestas. Arcu quis est sit aliquam egestas
                purus pharetra risus consectetur. Enim in leo scelerisque
                feugiat nisl nis aenean. Enim egestas inunc tristique integer
                interdum.
              </p>
              <button className="land-first-homebtn">
                Publish Your First Script
              </button>
            </div>
          </Grid>
          <Grid item md="5" xs="12" display={"grid"}>
            <div className="home-div-second">
              <img className="LAnd-img" src={Landingimg} alt="l-img" />
            </div>
          </Grid>

          <h3 className="HomeG-h3">Benifits</h3>

          <Grid
            item
            className="map-grid-main"
            md="12"
            justifyContent={"center"}
          >
            {Products.map((product) => (
              <Card className="div-map-card">
                <div className="para-map-div">
                  <p className="map-para">{product.para1}</p>
                </div>
              </Card>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home_G;
