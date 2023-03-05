import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { singUp } from '../Redux Tookit/slice/regiOpration';



export default function Regitration() {
  const data = useSelector(y => y.regi)

  const dispatch = useDispatch();
  const paperStyle = { padding: 20, width: 300, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '40px 0' }

  const myNav = useNavigate();

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Please Enter Your First Name !'),

    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Please Enter Your Last Name !'),
    email: Yup.string()
      .email('Invalid email')
      .required('Please Enter Your Email!'),

    password: Yup.string()
      .required("Please Enter Password"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",

    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      
      dispatch(singUp(values))

        toast.success("Sucessfully Sign UP");
        myNav('/login')
   
    },
  });
 
  useEffect(()=>{
    localStorage.setItem('USERDATA', JSON.stringify(data))
},[])
  return (
    <Grid component="form" onSubmit={formik.handleSubmit}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><PeopleAltIcon /></Avatar>
          <h2>Sign Up</h2>
        </Grid>

        <TextField label='First Name' margin="normal" placeholder='Enter First Name' variant="outlined" fullWidth
          name='firstName'
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField label='Last Name' margin="normal" placeholder='Enter Last Name' variant="outlined" fullWidth
          name='lastName'
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField label='Email' margin="normal" placeholder='Enter Email' variant="outlined" fullWidth
          name='email'
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField label='Password' placeholder='Enter password' margin="normal" type='password' variant="outlined" fullWidth
          name='password'
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>

      </Paper>
    </Grid>
  )
}

