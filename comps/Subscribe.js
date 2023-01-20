import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {Grid} from '@mui/material';
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import form from '../pages/form';
const Subscribe = () => {
  const router=useRouter();
    return ( <div id="subscribe">
      <Grid container>
        <Grid item sm={12} md={12} lg={6} sx={{ alignItems:"center", textAlign:"center"}}>
          <Typography variant="h4"  mt={3}>
           Subscribe to get notification
          </Typography>
          <Grid item mt={2}>
          <Typography variant="h7" mt={4} sx={{color:"gray", justifyContent:"center", textAlign:"center", alignItems:"center" }}>
          If you want to use this Service kindly Click the “Subscribe Button” and fill the Subscription form to get latest Tenders Details
          </Typography>
          </Grid>
          <Grid item mt={2} mb={2}>
          <Link href="/form"><Button sx={{ backgroundColor:"#14613D", color:"white", "&:hover": {backgroundColor:"#14613D", color:"white"}}}>Click here to Subscribe</Button></Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}  sx={{ color:"white", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
         <Image src="/bell.png" height={300} width={300} mt={1} ml={3} alt="bell"  />
        </Grid>
        </Grid>    
    </div> );
}
 
export default Subscribe;