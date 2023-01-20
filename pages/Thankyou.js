import * as React from "react";
import {Grid , Typography} from '@mui/material';
import Footer from '../comps/Footer'
import Image from 'next/image';
import Link from 'next/link';
const Thankyou = () => {
    return ( <>
     <Grid container  direction='row' justifyContent="center" sx={{marginTop:1}}>
     <Link href={"/"} passHref> <Image src="/logo.png" alt="logo" width={195} height={65} /> </Link>
     </Grid>
     <Grid  container sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    
    <Grid item  mt={1}  mb={2} >
    <Image src="/Tscreen.png" alt="looogo" width={350} height={415}  />
    </Grid>
     </Grid>

     <Footer />
    
    </>
     );
}
 
export default Thankyou;
