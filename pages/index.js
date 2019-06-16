import React, { Component } from "react";
import { Navigation } from "../components/Navigation";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { inherits } from "util";
import { typography } from "material-ui/styles";
import Typography from "material-ui/styles/typography";
import { Foot } from "../components/Foot";
import color from "@material-ui/core/colors/purple";
import { fontStyle, fontWeight, border } from "@material-ui/system";
import { ListItem } from "../components/ListItem";
import { FeatureItem } from "../components/FeatureItem";


export default class extends Component {
  render() {
    if (!process.browser) return null;

    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1
    };
    return (
      <div> 
        <Navigation />
        <div
          style={{
            maxWidth: 1280,
            height: 680,
            margin: "auto"
          }}
        >
          <Slider {...carouselSettings}>
            <div>
              <img src="https://via.placeholder.com/1280x589" />
            </div>
            <div>
              <img src="https://via.placeholder.com/1280x589" />
            </div>
            <div>
              <img src="https://via.placeholder.com/1280x589" />
            </div>
          </Slider>
        </div>
        <FeatureItem />
        <ListItem/>
        <Foot />
      </div>
    );
  }
}
