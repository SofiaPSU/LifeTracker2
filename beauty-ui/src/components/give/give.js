
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import './give.css';
import React from 'react';
import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  Grid  from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(1, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const AntSwitch = withStyles((theme) => ({
//   root: {
//     width: 28,
//     height: 16,
//     padding: 0,
//     display: 'flex',
//   },
//   switchBase: {
//     padding: 2,
//     color: theme.palette.grey[500],
//     '&$checked': {
//       transform: 'translateX(12px)',
//       color: theme.palette.common.white,
//       '& + $track': {
//         opacity: 1,
//         backgroundColor: theme.palette.primary.main,
//         borderColor: theme.palette.primary.main,
//       },
//     },
//   },
//   thumb: {
//     width: 12,
//     height: 12,
//     boxShadow: 'none',
//   },
//   track: {
//     border: `1px solid ${theme.palette.grey[500]}`,
//     borderRadius: 16 / 2,
//     opacity: 1,
//     backgroundColor: theme.palette.common.white,
//   },
//   checked: {},
// }))(Switch);

export default function Give({ user,setUser }){
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        product_type:"",
        quantity:"",
        is_used:"",
        zip_code:"",
        product_pic:"",
      })

    
        const [state, setState] = React.useState({
        
          checkedC: true
        });
      

      const handleOnInputChange = (event) => {
        // if (event.target.name === "email") {
        //   if (event.target.value.indexOf("@") === -1) {
        //     setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        //   } else {
        //     setErrors((e) => ({ ...e, email: null }))
        //   }
        // }
        //  //Also something extra doesnt allow registration to go through and gives an error if passwords dont match in the "password" input and the "confirm password" input
        // if (event.target.name === "passwordConfirm") {
        //   if (event.target.value !== form.password) {
        //     setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
        //   } else {
        //     setErrors((e) => ({ ...e, passwordConfirm: null }))
        //   }
        // }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
      const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))

        try {
            const res = await axios.post("http://localhost:3001/give/", {
              product_type: form.product_type,
              quantity: form.quantity,
              is_used: form.is_used,
              zip_code: form.zip_code,
              product_pic: form.product_pic,
            })
            if (res?.data?.user) {
              setUser(res.data.user)
            } else {
              setErrors((e) => ({ ...e, form: "Something went wrong with the giving submission" }))
            }
          } catch (err) {
            console.log(err)
            const message = err?.response?.data?.error?.message
            setErrors((e) => ({ ...e, form: message ?? String(err) }))
          } finally {
            setIsProcessing(false)
          }
    }
    const classes = useStyles();
    
    
    return(
      <div className="Give">
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
            
            <Grid container className="feedArea" spacing={2}>
              
              <Grid item xs={7} sm={7} md={6} >
                <img className="givePicture" src = "https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Makeup"></img>
              </Grid>

              <Grid item xs={4} sm={3} md={4} className="giveForm" component={Paper} elevation={0}>
              <div className={classes.paper}>
          <Typography component="h3" variant="h3" fontFamily="Arima Madurai">
            Give
          </Typography>
          {/* <h2>Give</h2> */}
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="productType"
              label="Product Type"
              name="product_type"
              autoComplete="product_type"
              autoFocus
              value={form.product_type}
              onChange={handleOnInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="quantity"
              label="Quantity"
              type="quantity"
              id="quantity"
              autoComplete="current-quantity"
              value={form.quantity}
              onChange={handleOnInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="product_pic"
              label="Product Image"
              type="productImg"
              id="productImg"
              autoComplete="product-image"
              value={form.product_pic}
              onChange={handleOnInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="zip_code"
              label="Zip Code"
              type="zipCode"
              id="zipCode"
              autoComplete="zip-code"
              value={form.zip_code}
              onChange={handleOnInputChange}
            />
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="is_used"
              label="Used"
              type="isUsed"
              id="isUsed"
              autoComplete="is-used"
              value={form.is_used}
              onChange={handleOnInputChange}
            /> */}
             <FormControl>
                <FormControlLabel
                  value={form.is_used}
                  control={<Switch color="primary" />}
                  onChange={handleOnInputChange}
                  label="Used"
                  labelPlacement="top"
                />

                <Typography component="div">
                  <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>No</Grid>
                    <Grid item>
                      {/* <AntSwitch checked={state.checkedA} onChange={handleOnInputChange} name="checkedC" /> */}
                    </Grid>
                    <Grid item>Yes</Grid>
                  </Grid>
                </Typography>
             </FormControl>

            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
             fullWidth
            
              variant="contained"
              // color="primary"
              className={classes.submit}
              disabled={isProcessing} 
              onClick={handleOnSubmit}
            >
              Submit
            </Button>
            <Grid container>
            </Grid>
  
          </form>
        </div>



              </Grid>
              

            </Grid>


        </Container>
      </div>
      
          
        
      // </React.Fragment>
      






        // <div className="Give">
        //     <div className="card">
        //       <div className="giveTitle">
        //          <h2>GIVE</h2>
        //       </div>
        //       <div className="giveDescription">
        //         <p>
        //             Empty, gently used, or never opened,  Hīrā will find the mose sustainable and eco-friendly way 
        //             to get rid of your unwanted products. 
        //         </p>
        //       </div>


        //     </div>
        // </div>

    );




}

