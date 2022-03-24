import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import header_background from './../../assets/img/header-7-min.jpg';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@mui/styles'
import { useState, useEffect } from 'react';
import { PageLoader } from './../utils/PageLoader';

// const style = {
//     HeaderBox: {
//         width: '100%',
//         height: '500px',
//         textAlign: 'center',
//         marginBottom : '50px',
//     },
//     HeaderImageBox: {
//         width: '90%',
//         height: '450px',
//         marginTop: '10px',
//         display : 'inline-block',
//         background : 'black',
//     },
//     HeaderImage: {
//         height: '100%',
//         width: '100%',
//         objectFit: 'cover',
//         border: '0px solid white',
//         borderTopRightRadius: '20px',
//         borderTopLeftRadius: '20px',
//     },
//     HeaderBottomCard: {
//         height: '25%',
//         width: '80%',
//         border: '0px solid white',
//         borderRadius: '20px',
//         display: 'inline-block',
//         marginTop: '-5%',
//         textAlign : 'center',
//         // backgroundColor : '#f0eded',
//     },
//     HeaderFormBox: {
//         width : '490px',
//         display : 'inline-block',
//     }
// }

const SetTime = (setLoading) => {
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    });
}

const useStyles = makeStyles({
    HeaderBox: {
        width: '100%',
        height: '500px',
        textAlign: 'center',
        marginBottom: '50px',
    },
    HeaderImage: {
        width: '90%',
        height: '450px',
        marginTop: '10px',
        display: 'inline-block',
        objectFit: 'cover',
        border: '0px solid white',
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px',
    },
    HeaderBottomCard: {
        height: '25%',
        width: '80%',
        border: '0px solid white',
        borderRadius: 20,
        display: 'inline-block',
        marginTop: '-5%',
        textAlign: 'center',
    },
    HeaderFormBox: {
        width: '490px',
        display: 'inline-block',
    }
});
function Header(props) {

    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    const orderFormValidation = yup.object({
        invoice_id: yup.number('Please entered valid Order #')
            .typeError('Please entered valid Order #')
            .required('Invoice# is required'),
        customer_lname: yup.string()
            .required('Customer lastname is required')
            .matches(/^[aA-zZ\s]+$/, "Please enter valid customer lastname")
    });
    const formik = useFormik({
        initialValues: {
            invoice_id: '',
            customer_lname: '',
        },
        validationSchema: orderFormValidation,
        onSubmit: async (values) => {

            props.SubmitForm(values);

        },
    });

    return (
        <>
        <PageLoader loading={loading} />
        
        <Box className={classes.HeaderBox}>
            <Box>
                <img className={classes.HeaderImage} src={header_background} alt="ace"></img>
            </Box>
            <Card className={classes.HeaderBottomCard}>
                <Box className={classes.HeaderFormBox}>
                    <Box className='form_background'>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <form onSubmit={formik.handleSubmit}>
                                <FormGroup className="MuiFormGroup-options" row>
                                    <FormControl variant="standard">
                                        <TextField
                                            id="invoice_id"
                                            name='invoice_id'
                                            label="Order #"
                                            variant="standard"
                                            sx={{ marginRight: '20px' }}
                                            value={formik.values.invoice_id}
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.errors.invoice_id)}
                                            helperText={formik.errors.invoice_id}
                                        />
                                    </FormControl>
                                    <FormControl variant="standard">
                                        <TextField
                                            id="customer_lname"
                                            name='customer_lname'
                                            label="Last Name"
                                            variant="standard"
                                            sx={{ marginRight: '20px' }}
                                            value={formik.values.customer_lname}
                                            onChange={formik.handleChange}
                                            error={/*formik.touched.customer_lname &&*/ Boolean(formik.errors.customer_lname)}
                                            helperText={formik.errors.customer_lname}
                                        />

                                    </FormControl>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            height: '40px',
                                            marginTop: '10px'
                                        }}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </FormGroup>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Box>
        {SetTime(setLoading)}
        </>
    )
}

export default Header;