import { Grid, Card, Container } from "@material-ui/core";

export default function UserDonations({ user, setUser } ){



    return(
        <div className="Donations">
             <Container maxWidth="lg" style={{ backgroundColor: '#ffffff',height: '100vh' }}>
                <Grid container>
                    <Grid item>
                        <h2>Total Donated Products</h2>
                    </Grid>
                </Grid>
             </Container>
        </div>
    );







}