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
    flexDirection: 'column',
    margin: 'auto',
    height: 725,
    width: 1170,
    backgroundColor: "white",
  },
  upList: {
    display: 'flex',
    margin: 'auto',
    width: 1170,
    backgroundColor: 'white'
  },
  dowList: {
    display: 'flex',
    margin:'auto',
    width: 1170,
    backgroundColor: 'white'
  },
  cardItems: {
    height: 305,
    width: 229,
    backgroundColor:'white',
  },
  cardItemImg: {
    height: 207,
    width: '100%'
  },
  cardItemContent: {

    
  },
  emptySpacing: {
    width: 6,
    height: 6
  },
  emptySpacing2: {
    height: 29
  },
  emptySpacing3: {
    height: 95,
  },
  text1: {
    display: 'flex',
    maxWidth: 1280,
    margin: 'auto',
    height: 84,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    "& > p":{
      fontSize:30,
      fontWeight: 400,
      color: '#2f3033'
    }
  },
  text2: {
    display: 'flex',
    maxWidth: 1280,
    margin: 'auto',
    height: 52,
    justifyContent:'center',
    alignItems: 'center',
    "& > button":{
      width: 233,
      height: 52,
      borderRadius: 1,
      border: `solid 1px #2f3033`,
      fontSize: 18,
      fontWeight: 400,
      color: '#2f3033'
    }
  }
})