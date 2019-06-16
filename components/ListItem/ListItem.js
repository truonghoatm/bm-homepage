import React, {Component} from "react";
import { styles } from "./ListItem.style";
import { withStyles } from "@material-ui/styles";
import { Grid, Card } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export const ListItem = withStyles(styles)(
  class extends Component{ 
    render() {
      const { classes } = this.props;
      return(
        <div className={classes.root}>
        <div className={classes.text1}>
        <p>LASTEST ITEMS</p>
        </div>
          <div className={classes.container}>
            <div className={classes.upList} > 
              <Card className={ classes.cardItems} >
                <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                      PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
                <div className={ classes.emptySpacing}></div>
              <Card className={ classes.cardItems}>
                  <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                      PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
                
                </CardContent>
                </CardActionArea>
              </Card>
              <div className={ classes.emptySpacing}></div>
              <Card className={ classes.cardItems}>
                  <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                    PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
              <div className={ classes.emptySpacing}></div>
              <Card className={ classes.cardItems}>
                  <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                    PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
                
                </CardContent>
                </CardActionArea>
              </Card>
              <div className={ classes.emptySpacing}></div>
              <Card className={classes.cardItems}> 
                  <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                    PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
              
                </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className={classes.emptySpacing2} />
            <div className={classes.dowList}>
            <Card className={ classes.cardItems} >
                <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                      PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
                <div className={ classes.emptySpacing}></div>
              <Card className={ classes.cardItems}>
                  <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                      PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
                
                </CardContent>
                </CardActionArea>
              </Card>
              <div className={ classes.emptySpacing}></div>
              <Card className={ classes.cardItems}>
                  <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                    PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
              <div className={ classes.emptySpacing}></div>
              <Card className={ classes.cardItems}>
                  <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                    PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
                
                </CardContent>
                </CardActionArea>
              </Card>
              <div className={ classes.emptySpacing}></div>
              <Card className={classes.cardItems}> 
                  <CardActionArea>
                <CardMedia
                  className={classes.cardItemImg}
                  image="https://toplist.vn/images/800px/toto-shop-146415.jpg"
                  title="Contemplative Reptile"
                  />
                <CardContent>
                <Typography variant='body2' color='textSecondary' component="h3" >
                    PREDATOR JERSEY
                </Typography>
                <div className={ classes.emptySpacing} />
                <Typography variant="h5" color="textPrimary" component="h3">
                    21.95 CAD
                </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
          <div className={classes.text2}>
            <button>VIEW ALL LISTTING</button>
          </div>
          <div className={ classes.emptySpacing3} />
        </div>
      )
    }
  }
)