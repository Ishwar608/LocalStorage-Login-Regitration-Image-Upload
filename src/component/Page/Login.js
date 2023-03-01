import React from 'react'
import TextField from '@mui/material/TextField';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



export default function Login({ setLgdata }) {

  const lData = JSON.parse(localStorage.getItem('USERDATA')).data;
  const myNav = useNavigate();

  const paperStyle = { padding: 20, width: 300, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '20px 0' }

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Please Enter Your Email!'),

    password: Yup.string()
      .required("Please Enter Password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {

      lData.map((ele) => {
        if (values.email == ele.email && ele.password == values.password) {
          setLgdata(true);
          toast.success("Sucessfully Login");
          setTimeout(() => {
            myNav('/stuInfo');
          }, 2000)
        } 
      })

    },

  });

  return (
    <Grid component="form" onSubmit={formik.handleSubmit}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><PeopleAltIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>

        <TextField label='Email' placeholder='Enter Email' margin='normal' variant="outlined" fullWidth
          name='email'
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField label='Password' placeholder='Enter password' margin='normal' type='password' variant="outlined" fullWidth
          name='password'
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

      </Paper>
    </Grid>
  )
}

