import { useEffect, useState } from "react";
import ApiClient from "../../services/apiClient";
import { Grid, Card, Container, CardMedia, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        width: '15vw',
        height: '35vh',
        border:'2px solid',
        borderRadius: 0,
        borderColor:'#64ffda',
     
    },
    title: {
     display:"flex",
     paddingTop: '5%',
     paddingBottom: '5%',
    },
    feed: {
     justifyContent:"space-between",
     alignContent:"space-evenly",
     gridRowGap:'4rem' ,

    },
    card: {
        borderColor:"primary.main"
    },
    media: {
      height: 20,
      width: 300,
      paddingTop: '56.25%', // 16:9
    },
    timestamp: {
        textAlign:'start',
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
                                <Card className={classes.root} key={donation.id} >
                                        
                                        <CardMedia 
                                        className={classes.media}
                                        image={donation.product_pic}
                                        title="Donation"
                                        />
                                        
                                        <CardContent>
                                            <Typography variant="body1" color="textSecondary" component="p">
                                               Product: {donation.product_type} 
                                            </Typography>

                                            <Typography variant="body1" color="textSecondary" component="p">
                                               Qty: {donation.quantity}
                                            </Typography>

                                            <Typography variant="body1" color="textSecondary" component="p" className={classes.timestamp}>
                                               Created at: {donation.created_at}
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