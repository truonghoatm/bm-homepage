import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./FeatureItem.style";
import { Grid } from "@material-ui/core";

export const FeatureItem = withStyles(styles) (
  class extends Component {
    render () {
      const { classes } = this.props;
      return(
        <div className={classes.container}>
          <Grid xs={4}>  
            <img className={classes.featureItemLogo} src="https://i.pinimg.com/originals/82/25/bf/8225bfd9be6d2fe8c878a58ca80836e1.jpg"></img>
            <div className={classes.spacing}></div>
            <div className={classes.p}>Who are we?</div>
            <div className={classes.spacing2} />
            <div className={classes.textBox}>
            A passionate team, gentle prices ! Contact us if you want to lighten your wardrobe 
            or to find those very special garments.
            </div>
          </Grid>
          <Grid xs={4} >
            <img className={classes.featureItemLogo} src="https://i.pinimg.com/originals/82/25/bf/8225bfd9be6d2fe8c878a58ca80836e1.jpg"></img>
            <div className={classes.spacing}></div>
            <div className={classes.p1}>How does it work?</div>
            <div className={classes.spacing2} />
            <div className={classes.textBox1}>
              Sellers ? Photograph, describe and publish your articles
              (we retain 10% of the selling price). Buyers ? Shop and get it delivered !
            </div>
          </Grid>
          <Grid xs={4}>
          <img className={classes.featureItemLogo} src="https://i.pinimg.com/originals/82/25/bf/8225bfd9be6d2fe8c878a58ca80836e1.jpg"></img>
            <div className={classes.spacing}></div>
            <div className={classes.p2}>A gesture for the planet!</div>
            <div className={classes.spacing2} />
            <div className={classes.textBox2}>
            Here, we encourage second hand trade. Like us, be part of the millions 
            of people who offer clothing a second life!
            </div>
          </Grid>
        </div>
      )
    }
  }
)