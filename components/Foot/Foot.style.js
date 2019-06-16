import color from "@material-ui/core/colors/lime";

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
    backgroundColor: "#2f3033"
  },
    container: {
      // background: "green",
      display: "flex",
      maxWidth: 1280,
      margin: "auto"
    },
    upperFooter: {
      borderBottom: `solid 1px #979797`,
      "& > $container": {
        height: 82,
      }
    },
    beetwenFooter: {
      borderBottom: `solid 1px #979797`,
      height: 218,
      "& > $container": {
        display: "flex"
      }
    },
    lowerFooter: {
      borderBottom: `solid 1px #2f3033`,
      "& > $container": {
        height: 50,
        display: "flex",
        justifyContent: 'start',
        alignItems: 'center',
        fontSize: 14,
        color: '#979aa3'
        }
    },
    logo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 18,
      fontWeight: 400,
      color: 'white'
    
    },
    categories: {
      maxWidth: 1280,
      height: 57,
      display: "flex",
      "& > div": {
        paddingTop: 44,
        width: 200,
        height: 18,
        fontSize: 12,
        fontWeight: 400,
        paddingBottom: 100,
        color: 'white'
      },
    },
    inforBox: {
      maxWidth: 79,
      height: 78,
      margin: 'auto',
      display: 'flex',
    },
    inforBoxItem: {
      flexDirection: 'column',
      maxWidth: 1280,
      margin: 'auto',
      "& > p":{
        fontSize: 16,
        fontWeight: 200,
        color: '#979aa3',
      }
    },
    emptySpacing: {
      flexGrow: 1
    },
    emptySpacing1: {
      height: 13, 
    }
    
});

