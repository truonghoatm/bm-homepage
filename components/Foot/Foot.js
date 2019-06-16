import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './Foot.style';
export const Foot = withStyles(styles)(
  class extends Component{
    render() {
      const { classes } = this.props;
      return(
        <div className={classes.root}>
          <div className={classes.upperFooter}>
            <div className={classes.container}>
              <div className={classes.logo}>BON MAGASINAGE</div>
              <div className={classes.emptySpacing} />
            </div>
          </div>
          <div className={classes.beetwenFooter}>
              <div className={classes.container}>
                <div className={classes.categories}>
                  <div>INFORMATION</div>
                  <div className={classes.emptySpacing} />
                  <div>MEN</div>
                  <div>WOMEN</div>
                  <div>KIDS</div>
                  <div> A QUESTION OR A COMMENT ?</div>
                </div>
              </div>
            </div>
            <div className={classes.lowerFooter}>
                <div className={classes.container}>
                Copyright 2018 BON MAGASINAGE
                  {/* <div className={classes.textFooter}>
                  </div> */}
                </div>
            </div>
        </div>
      ) 
    }
  });
