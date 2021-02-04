  
import { Container, Typography, Button, Grid } from "@material-ui/core";
import villa300 from "../../assets/villa300.jpg";
import villa200 from "../../assets/villa200.jpg";
import villa100 from "../../assets/villa100.jpg";
import useStyles from './styles';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const Banner = () => {
    const classes = useStyles();
  return (

        <div >
        <Slide easing="ease" className={classes.banner}>
          <div className={classes.eachslide}>    
              <img src={villa300} className={classes.img}/>
         
          </div>
          <div className={classes.eachslide}>         
              <img src={villa200} className={classes.img} />    
          </div>
          <div className={classes.eachslide}>         
              <img className={classes.img} src={villa100} />
   
          </div>
          </Slide>
    
      </div>

  );
};

export default Banner;