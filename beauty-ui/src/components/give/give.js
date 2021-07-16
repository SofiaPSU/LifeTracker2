
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
import {  purple, grey }  from "@material-ui/core/colors";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import apiClient from "../../services/apiClient";
// import { WithStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: theme.spacing(0, "auto"),
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
    margin: theme.spacing(0, "auto"),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const AntSwitch = withStyles((theme) => ({
  root: {
    width: 34,
    height: 17,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 4,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 11,
    height: 12,
    boxShadow: 'none',
    color: theme.palette.common.black
  },
  track: {
    border: `2px solid ${theme.palette.grey[500]}`,
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);


export default function Give({ user,setUser }){
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [toggle,setToggle]=useState(false)
    // const [state, setState] = useState({
    //   checkedC: false
      
    // });

    const [form, setForm] = useState({
        product_type:"",
        quantity:"",
        is_used:"",
        zip_code:"",
        product_pic:"",
      })

      useEffect(() => {
        // if user is already logged in,
        // redirect them to the detailed activity page aka an authenticated view
        if (user?.email) {
          navigate("/give/")
        }
        // else if(!user?.email){
          
        //   // navigate("/give/giveUnauthorized")
        // }
      }, [user, navigate])

    const handleOnInputChange = (event) => {
        
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
       
       
    }
     
    const toggler = () => {
      toggle ? setToggle(false): setToggle(true)
     
    }

    
    const handleChange = (event) => {
      // setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      setForm((f) => ({ ...f, [event.target.name]: event.target.checked }))

      // setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleOnSubmit = async () => {
      setIsProcessing(true)
      setErrors((e) => ({ ...e, form: null }))

      const{ data, error } = await apiClient.createGiving({
            product_type: form.product_type,
            quantity: form.quantity,
            is_used: form.is_used,
            zip_code: form.zip_code,
            product_pic: form.product_pic
      })
      if(error) setErrors( setErrors((e) => ({ ...e, form: error })))
    //?.user
      if(data){
        setUser(data.user)
        apiClient.setToken(data.token)
      }
      setIsProcessing(false)

    //   try {
    //       const res = await axios.post("http://localhost:3001/give/", {
    //         product_type: form.product_type,
    //         quantity: form.quantity,
    //         is_used: form.is_used,
    //         zip_code: form.zip_code,
    //         product_pic: form.product_pic,
    //       })
    //       if (res?.data?.user) {
    //         setUser(res.data.user)
    //       } else {
    //         setErrors((e) => ({ ...e, form: "Something went wrong with the giving submission" }))
    //       }
    //     } catch (err) {
    //       console.log(err)
    //       const message = err?.response?.data?.error?.message
    //       setErrors((e) => ({ ...e, form: message ?? String(err) }))
    //     } finally {
    //       setIsProcessing(false)
    //     }
      
    //   console.log(form)
      
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
            
            <Grid container  spacing={2} className="feedArea">
            {/* className="feedArea" */}
              <Grid item xs={6} sm={6} md={6} className={classes.image}>
                {/* <img className="givePicture"  src = "https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Makeup"></img> */}

              </Grid>

              <Grid item xs={4} sm={3} md={4} className="giveForm" component={Paper} elevation={0}>
              <div className={classes.paper}>
          <Typography component="h3" variant="h3" fontFamily="Arima Madurai">
            Give
          </Typography>
          
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

            <FormControl>
              
                <Grid container component="label"  alignItems="center" spacing={1}>
                  <Grid item>No</Grid>
                  <Grid item>
                    <FormControlLabel
                    // name="top"
                  // value={form.is_used}
                    control={<AntSwitch  onChange={handleChange} name="is_used" onClick={toggler} value={form.is_used}/> }
                    //value={form.is_used}
                    //name="checkedC"
                    
                    label="Used"
                    labelPlacement="top"
                    /> 
                    {/* {toggle ? <span>True</span> : <span>False</span>} */}
                  </Grid>
                  <Grid item >Yes</Grid>
                </Grid>
              {/* </Typography> */}
            </FormControl>    
      
            <Button
              type="submit"
             fullWidth
            
              variant="contained"
              color="default"
              className={classes.submit}
              disabled={isProcessing} 
              onClick={handleOnSubmit}
              
            >
              {isProcessing ? "Loading..." : "Submit"}
              {/* Submit */}
            </Button>
            <Grid container>
            </Grid>
  
          </form>
        </div>



              </Grid>
              

            </Grid>


        </Container>
      </div>
      
    );


}

