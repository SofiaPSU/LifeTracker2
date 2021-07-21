import { useEffect, useState } from "react";
import ApiClient from "../../services/apiClient";
import { Grid, Card, Container, CardMedia, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "345vw",
     
    },
    title: {
     display:"flex",
     paddingBottom: '5%' ,
    },
    feed: {
     justifyContent:"space-around"
    },
    card: {
        borderColor:"primary.main"
    },
    media: {
      height: 25,
      width: 100,
      paddingTop: '56.25%', // 16:9
    },
  }));

export default function UserDonations({ donations }){
    const classes = useStyles();

    return(
        <div className="Donations">
             <Container maxWidth="lg" style={{ backgroundColor: '#ffffff',height: '100vh' }}>
                <Grid container className="usersDonations">
                    <Grid item className={classes.title}>
                        <h2>Total Donated Products  #</h2>
                    
                    </Grid>
                    <Grid container className={classes.feed} >
                        {donations.map((donation) => {
                            // console.log(donation)
                        // console.log(donations[donation].product_pic) 
                            return ( 
                                <Card className={classes.root} key={donation.id}  bordercolor="primary.main" >
                                        
                                        <CardMedia 
                                        className={classes.media}
                                        image={donation.product_pic}
                                        title="Donation"
                                        />
                                        
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                               {donation.product_type}
                                            </Typography>
                                        </CardContent>


                                </Card>

                            )
                        
                        })
                        }
                    </Grid>
                </Grid>
             </Container>
        </div>
    );







}