import '../Invoice.css';
import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { API } from '../BaseAPI/axios';
import Grid from '@mui/material/Grid';
import Header from '../layout/header/Header';

export default function GetOrderDetails() {

    const [isLoading, setLoading] = useState("false");
    const [invoices, setInvoices] = useState([]);

    async function SubmitForm(values) {
        try {
            setLoading("isLoading");
            const res = await API.get(`/api/customer/get-order/${values.invoice_id}/${values.customer_lname}`);
            if (res.data.status) {
                setInvoices(getObjectData(res));
                Completed();
            } else {
                setLoading(res.data.message);
            }
        } catch (e) {
            console.error(e);
        }
    }

    function getObjectData(res) {
        res = res.data.hasOwnProperty('data') ? res.data.data : null;
        return res;
    }
    function Completed() {
        setLoading("completed");
    }
    const LoadingComp = () => {
        return (
            <Box width="lg">
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </Box>
        );
    }
    const InvoiceCard = () => {
        return (
            invoices.map((invoice, key) => {
                return (
                        // <Card sx={{ maxWidth: 685 }} key={key}>
                        //     <CardContent>
                    <Box style={{border:'0px solid black', borderRadius:'20px'}}>
                        <div className="col-md-12 ticket-container" key={key}>
                            <div className="col-xs-12 col-sm-8 ticket-data">
                                <div className="event-title">
                                    <h3>Event</h3>
                                </div>
                                <div className="event-info">
                                    <h3 className="p3 event-name">{invoice.Event_Name}</h3>
                                    <p className="p4 event-date"><span className="date">{invoice.Event_Date} {invoice.Event_Time}</span> <span className="time">at 03:30 AM</span></p>
                                </div>
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div>
                                            <h3>SECTION</h3>
                                            <p>{invoice.Section}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <div>
                                            <h3>ROW</h3>
                                            <p>{invoice.Row ? invoice.Row : 'N/A'}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <div>
                                            <h3>Customer</h3>
                                            <p>{invoice.customer_name ? invoice.customer_name : 'N/A'}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <div>
                                            <h3>Total Price</h3>
                                            <p>{invoice.total_order ? parseFloat(invoice.total_order).toFixed(2) : 'N/A'}</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="col-xs-12 col-md-8 col-md-offset-2">
                                <div className="review-status">Your order has been confirmed. We will email you when it has been completed for delivery or pickup.</div>
                            </div>
                            <div className="col-xs-12 ticket-order">
                                <div className="col-sm-5 order-details">
                                    <h4>Invoice #: <span>{invoice.Invoice_ID}</span></h4>
                                </div>
                                <div className="col-sm-5 order-date">
                                    <h4>Order Date: <span>{invoice.Purch_Date}</span></h4>
                                </div>
                                <div className="col-sm-2 quantity">
                                    <h4>Qty: <span>{invoice.Qty}</span></h4>
                                </div>
                            </div>
                        </div>
                    </Box>
                    //     </CardContent>
                    // </Card>

                )
})
        )
    }
const BasicAlert = () => {
    if (isLoading !== "false" && isLoading !== "completed" && isLoading !== "isLoading") {
        return (
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">{isLoading}</Alert>
            </Stack>
        );
    } else {
        return null;
    }
}


return (
    <React.Fragment>
        <CssBaseline />
        <Header SubmitForm={SubmitForm} />
        <Container maxWidth="lg">
            {
                isLoading === "isLoading" ? <LoadingComp /> : isLoading === "completed" ? <InvoiceCard /> : <BasicAlert />
            }
        </Container>
    </React.Fragment>
);
}