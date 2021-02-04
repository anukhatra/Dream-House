import React,{useState} from 'react';
import useStyles from './styles';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton ,Paper} from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  const [spacing, setSpacing] = useState(1);
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className={classes.footer} >
                <p>
                      All © copy rights are reserved to DreamHome 2021
                </p>

    </footer>
  );
};

export default Footer;