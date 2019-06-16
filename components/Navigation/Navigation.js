import React, { Component } from "react";
import { Button, Typography, InputBase } from "@material-ui/core";
import { styles } from "./Navigation.style";
import { withStyles } from "@material-ui/styles";

import SearchIcon from "@material-ui/icons/Search";

export const Navigation = withStyles(styles)(
  class extends Component {
    render() {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <div className={classes.upperNav}>
            <div className={classes.container}>
              <div className={classes.emptySpacing} />
              <div className={classes.navActionGroup}>
                <Typography>Help</Typography>
                <Typography>Sign up</Typography>
                <Typography>Login</Typography>
              </div>
            </div>
          </div>
          <div className={classes.lowerNav}>
            <div className={classes.container}>
              <div className={classes.logo}>BON MAGASINAGE</div>
              <div className={classes.emptySpacing} />
              <div className={classes.categories}>
                <div>Men</div>
                <div>Women</div>
                <div>Children</div>
              </div>
              <div className={classes.emptySpacing} />
              <div className={classes.searchContainer}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "Search" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);
