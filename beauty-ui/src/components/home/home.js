import './home.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button"
import { Box, Typography, makeStyles, Grid, FormHelperText } from "@material-ui/core"
import Container from '@material-ui/core/Container';

//for grids
import Paper from '@material-ui/core/Paper';


//useStyles is like CSS in js
const useStyles = makeStyles((theme) => ({

moisturizerPaper: {
    height: 550,
    width: 500,
    background: `url(https://images.unsplash.com/photo-1575410229391-19b4da01cc94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhY2UlMjBtb2lzdHVyaXplcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: 80,
    padding: 25,
    
},
cleanserPaper: {
    height: 550,
    width: 500,
    background: `url(https://images.unsplash.com/photo-1556228720-195a672e8a03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: 80,
    padding: 25,
        
},
serumPaper: {
    height: 550,
    width: 500,
    background: `url(https://images.unsplash.com/photo-1600180583258-6d9b0c7b782b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNlcnVtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: 80,
    padding: 25,
            
},     
foundationPaper: {
    height: 550,
    width: 500,
    background: `url(https://images.unsplash.com/photo-1607602132700-068258431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: 80,
    padding: 25,
        
},
mascaraPaper: {
    height: 550,
    width: 500,
    background: `url(https://images.unsplash.com/photo-1560725613-4b52e67fc67b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: 80,
    padding: 25,
            
},
powderPaper: {
    height: 550,
    width: 500,
    background: `url(https://images.unsplash.com/photo-1590156424570-698d124ec7dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBvd2RlciUyMG1ha2V1cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: 80,
    padding: 25,
        
},
perfumePaper: {
    height: 550,
    width: 500,
    background: `url(https://images.unsplash.com/photo-1622618991746-fe6004db3a47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcmZ1bWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: 80,
    padding: 25,
            
},   
wrapper: {
    height: 700,
    width: '100vw',
    margin: "auto",
    background: `url(https://images.unsplash.com/photo-1598412795976-9c195182ee01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1004&q=100)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

},
title: {
    fontFamily: "Euclid Circular A",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 85,
    margin: "auto",
    letterSpacing: "-0.015em",
    color: "#8F5338",

},
subtitle: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 60,
    fontFamily: "Arima Madurai",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: "-0.015em",
    color: "#000000",

},
registerBTN: {
    marginTop: 10, // space between outer edge and adjacent elements 
    padding: 20, //space between content , outer edge
    width: 270,
    height: 70,
    fontFamily: "Arima Madurai",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: "-0.015em",
    background: "#96583C",
    color: "#FFFFFF",

},
bottom: {
    display: "Flex",
    width: '100vw',
    padding: 60,
    fontFamily: "Arima Madurai",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: "-0.015em",
    color: "#FFFFFF",
    background: "#5C625E",

},

skincare: {
    fontFamily: "Euclid Circular A",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 40,
    padding: "none",
    letterSpacing: "-0.015em",
    textAlign: "justify",
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 80,
    color: "#96583C",

},

productTitle: {
    fontFamily: "Euclid Circular A",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 80,
    textAlign: "center",
    letterSpacing: "-0.015em",
    color: "#5C625E"
    
},

productSubtitle: {
    fontFamily: "Arima Madurai",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 80,
    textAlign: "center",
    letterSpacing: "-0.015em",
    color: "#756F6F;"
    
},


}));

export default function Home() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles(); //classes invokes useStyles hook

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
<div>
    
    <Box className={classes.wrapper}>
        <Typography variant="h1" className={classes.title}>
            Making Beauty Sustainable
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
            Donate or Recycle Your Makeup Products, learn More About SustainabilityThe beauty industry creates 120 billion units of packaging every year. In 2015, research found that packaging accounted for 146 million tonnes of plastic every year.
        </Typography>
        <Button variant="contained" color="default" className={classes.registerBTN}>
            Register
        </Button>
    </Box>

    <Typography className={classes.bottom}>
        We accept most skincare and makeup products for donations and recycling. We priotize  the products that most people use as part of their daily routine. Whether they come in paper, plastic, or glass, we will gladly accept them. Here are some of examples of what we accept....
    </Typography>
   

    <Box>
        <Typography className={classes.skincare}>
            Skincare
        </Typography>

        <Grid className="skincare-examples">
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={spacing}>
                        {[0].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.moisturizerPaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                        Moisturizers + Sun
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                        Usually comes in plastic or glass containers.
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                        {[1].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.cleanserPaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                        Cleansers
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                        Usually comes in plastic or glass containers.
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                        {[2].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.serumPaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                        Serums
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                        Usually comes in glass containers.
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Typography className={classes.skincare}>
            Makeup
        </Typography>
        <Grid className="makeup-examples">
            <Grid container className={classes.root} spacing={2}>
                <Grid item>
                    <Grid container spacing={spacing} >
                    {[0].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.powderPaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                        Powder
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                        Usually comes in plastic or glass containers.
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                        {[1].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.mascaraPaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                        Mascaras
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                        Usually comes in plastic containers.
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                        {[2].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.foundationPaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                    Liquid Foundations
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                    Usually comes in glass containers.
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                        {[3].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.perfumePaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                        Perfumes
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                        Usually comes in glass containers.
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    </Grid>
            </Grid>
        </Grid>
    </Box>
</div>

  );
}


