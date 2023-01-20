import React from 'react'
import Image from 'next/image'
import {Grid} from '@mui/material';

import { Typography } from '@mui/material';
const About = () => {
    return ( <div id="about"> 
         <Grid container sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
         <Grid item lg={9} md={12} sm={12}>
            <Image src="/aboutpic.png" width={960} height={490}  layout={"responsive"} alt="about" />  
         </Grid> 
         <Grid item sx={{justifyContent:"center", alignItems:"center"}}>
            <Typography variant="h4">
                About Us
            </Typography>
            <Grid item lg={12} md={12} sm={12} sx={{ justifyContent:"center", alignItems:"center" , textAlign:"center", color:"gray"}}>
            <Typography variant="h7" mt={1} >
            Pak Thaika is a service introduced to help contractors all across Pakistan. 
            Pak Thaika has used modern Tools & Technologies to make a automated system integrated with 
            PPRA website to notify Contractors of Tender Notices Published in the Website.
           </Typography>
            </Grid>
         </Grid>
         </Grid>
    </div> );
}
 
export default About;


