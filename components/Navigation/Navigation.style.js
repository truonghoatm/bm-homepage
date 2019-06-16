import { yellow } from "@material-ui/core/colors";
import { sizeHeight } from "@material-ui/system";
import { fade } from "@material-ui/core/styles";

export const styles = theme => ({
  "@global": {
    body: {
      margin: 0
    },
    "#__next": {
      // background: "yellow"
    }
  },
  root: {
    // background: "blue"
  },
  container: {
    // background: "green",
    display: "flex",
    maxWidth: 1280,
    margin: "auto"
  },
  upperNav: {
    borderBottom: `solid 1px #2f3033`,
    "& > $container": {
      height: 44
    }
  },
  lowerNav: {
    borderBottom: `solid 1px #2f3033`,
    "& > $container": {
      height: 66,
      display: "flex"
    }
  },
  emptySpacing: {
    flexGrow: 1
  },
  navActionGroup: {
    display: "flex",
    "& > p": {
      width: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 16,
      "&:nth-child(2)": {
        fontWeight: 600
      }
    }
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  categories: {
    display: "flex",
    alignItems: "center",
    "& > div": {
      width: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  search: {
    border: `1px solid #ddd`,
    height: 35,
    position: "relative",
    borderRadius: 4,
    backgroundColor: fade("#ffffff", 0.15),
    "&:hover": {
      backgroundColor: fade("#ffffff", 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});
