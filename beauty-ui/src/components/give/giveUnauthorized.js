import { Container, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./giveUnauthorized.css"

export default function GiveUnauthorized(){
    return(
        <div className="giveUnauthorized">
            <Container maxWidth="lg" style={{ backgroundColor: '#ffffff',height: '100vh' }}>
                <div className="giveTitle">
                        <h2>GIVE</h2>
                </div>
                <div className="giveDescription">
                    <p>
                        Empty, gently used, or never opened,  Hīrā will find the mose sustainable and eco-friendly way 
                        to get rid of your unwanted products. 
                    </p>     
                </div>
                {/* spacing={2} */}
                <Grid container className="feedPlace" justify-content="center" >
                    <Grid item  xs={5}  className="giveWarning"  component={Paper} elevation={0}>
                        <p>
                        Sorry! you must be logged in to complete the action
                        of donating or recycling your beauty product to your nearest center.
                        </p>

                        <Grid container  justify-content= "center" spacing={2}>
                        <Grid item > 
                            <Button className="login" variant="contained" color="default">
                                <a href="/login">
                                    Log In
                                </a>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className="register" variant="contained" color="default">
                                <a href="/register">
                                    Register
                                </a>
                            </Button>
                        </Grid>
                    </Grid>

                    </Grid>
                    
                   

                </Grid>

           </Container>
        </div>

    );



}