import React from 'react'
import Stack from '@mui/material/Stack';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from "yup";
import {useDispatch, useSelector} from 'react-redux'
import TableData from './TableData';
import { addStuData } from '../Redux Tookit/slice/crudOpration';

export default function StudentInfo() {

  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({

    rollno: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required("Please Enter RollNo")
      .matches(/^[0-9]+$/, "Must be only digits"),

    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Please Enter Your Last Name !'),

    sub: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Please Enter Your Subject !'),

    marks: Yup.string()
      .required("Please Enter Marks")
      .matches(/^[0-9]+$/, "Must be only digits")


  });

  const formik = useFormik({
    initialValues: {

      rollno: "",
      firstName: "",
      sub: "",
      marks: ''

    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      dispatch(addStuData(values))
    },
  });
  

  return (
    <>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ m: 1 }}>
          <Typography variant="h4" component="h2" >Student-Information</Typography>
          <TextField
            id="filled-basic"
            margin='normal'
            sx={{ mr: 1 }}
            label="Roll-No"
            variant="filled"
            name='rollno'
            onChange={formik.handleChange}
            error={formik.touched.rollno && Boolean(formik.errors.rollno)}
            helperText={formik.touched.rollno && formik.errors.rollno}
          />
          <TextField
            id="filled-basic"
            margin='normal' sx={{ mr: 1 }}
            label="Name"
            variant="filled"
            name='firstName'
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}

          />
          <TextField
            id="filled-basic"
            margin='normal' sx={{ mr: 1 }}
            label="Subject"
            variant="filled"
            name='sub'
            onChange={formik.handleChange}
            error={formik.touched.sub && Boolean(formik.errors.sub)}
            helperText={formik.touched.sub && formik.errors.sub}

          />
          <TextField
            id="filled-basic"
            margin='normal' sx={{ mr: 1 }}
            label="Marks"
            variant="filled"
            name='marks'
            onChange={formik.handleChange}
            error={formik.touched.marks && Boolean(formik.errors.marks)}
            helperText={formik.touched.sub && formik.errors.marks}

          />
          <Button variant="contained" type="submit" sx={{ ml: 3, mt: 3, mb: 2 }}>Add</Button>
        </Box>
        <TableData/>
    </>
  )
}
