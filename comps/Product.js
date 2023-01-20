import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {Grid} from '@mui/material';
import { Typography } from '@mui/material';
const Product = () => {
    return ( <div id="product">
    <Grid container spacing={3} mt={3} sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", alignContent:"center", textAlign:"center"}}>
        <Grid item sm={12} md={12} lg={5} mb={2} >
       <Image src="/tender.png"  alt='tender' height={300} width={400} layout={"responsive"} />
        </Grid>
        <Grid item sm={12} md={12} lg={6} >
         <Typography variant="h4"  mb={1}>
         Get Tender Alerts on Mobile
         </Typography>
         <Typography sx={{ color: "gray" }} variant="h7" >
         Get Your paid SMS Subscription then we will send details of relevant tenders as soon as it gets uploaded in PPRA website.
         </Typography>
         <Grid item sx={{display:"flex",  alignItems:"center"}} mt={1} ml={2} mb={2}>
            <Image src="/group1.png" height={60} width={60} alt="icon" />
            <Typography variant="h6"  sx={{ color: "gray"}} ml={3}>
                 Subscribe Us
            </Typography>
         </Grid>
         <Grid item sx={{display:"flex", alignItems:"center"}} mt={1} ml={2} mb={2}>
            <Image src="/grup2.png"  height={58} width={60} alt="icon2" />
            <Typography variant="h6"  sx={{ color: "gray"}} ml={3} mb={2}>
                 Get 24/7 tender alerts.
            </Typography>
         </Grid>
        </Grid>
    </Grid>
    </div> );
}
 
export default Product;