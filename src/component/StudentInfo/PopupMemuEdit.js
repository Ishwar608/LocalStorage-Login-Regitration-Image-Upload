import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { edtStuData } from '../Redux Tookit/slice/crudOpration';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'


};

export default function PopupMemuEdit({ open, handleClose, editIndex }) {
    const data = useSelector(y => y.crudData).notes;
    const dispatch = useDispatch();

  
   
    const SignupSchema = Yup.object().shape({

        rollno: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required("Please Enter RollNo")
            .matches(/^[0-9]+$/, "Must be only digits"),

        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
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
            rollno: data[editIndex]?.rollno,
            firstName: data[editIndex]?.firstName,
            sub: data[editIndex]?.sub,
            marks: data[editIndex]?.marks
        },
        enableReinitialize:true,
        validationSchema: SignupSchema,

        onSubmit: (values) => {
            let edt = [...data];
            edt[editIndex]=values;
            dispatch(edtStuData(edt))
            handleClose();
            
        },
    });
   console.log(data[editIndex]);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box component="form" onSubmit={formik.handleSubmit} sx={style} >
                <Typography id="modal-modal-title" variant="h6" textAlign='center' component="h2">
                    Update
                </Typography>
                <TextField
                    fullWidth
                    margin='normal'
                    id="outlined-basic"
                    label="Rollno"
                    variant="outlined"
                    name='rollno'
                    value={formik.values.rollno}
                    onChange={formik.handleChange}
                    error={formik.touched.rollno && Boolean(formik.errors.rollno)}
                    helperText={formik.touched.rollno && formik.errors.rollno}
                />
                <TextField
                    fullWidth
                    margin='normal'
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name='firstName'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                    fullWidth
                    margin='normal'
                    id="outlined-basic"
                    label="Subject"
                    variant="outlined"
                    name='sub'
                    value={formik.values.sub}
                    onChange={formik.handleChange}
                    error={formik.touched.sub && Boolean(formik.errors.sub)}
                    helperText={formik.touched.sub && formik.errors.sub}
                />
                <TextField
                    fullWidth
                    margin='normal'
                    id="outlined-basic"
                    label="Marks"
                    variant="outlined"
                    name='marks'
                    value={formik.values.marks}
                    onChange={formik.handleChange}
                    error={formik.touched.marks && Boolean(formik.errors.marks)}
                    helperText={formik.touched.sub && formik.errors.marks}

                />
                <Button variant="contained"  type="submit">Update</Button>
            </Box>
        </Modal>

    );
}
