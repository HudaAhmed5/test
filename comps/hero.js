import React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import {useMediaQuery } from "@mui/material"
import {Button} from '@mui/material';
import Link from 'next/link'
import { Typography } from '@mui/material';

const Hero = () => {
  const mx900= useMediaQuery('(max-width:900px)')
  const min900= useMediaQuery('(min-width: 901px)')
    return ( 
      <div id="hero">
     <div style={{display: mx900 ? "block" : 'none'}}>
     <Grid container sx={{backgroundColor:"#14613D", display:"flex", flexDirection:"row", textAlign:"center", color:"white"}}>
     <Grid item  xs={12} sm={12} md={12} lg={6} xl={6} sx={{display:"flex", flexDirection:"column" , alignItems:"center", justifyContent:"center"}}>
     <Image src="/hero.png"   width={400}
        height={300} alt="hero"   layout={"responsive"}  />
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={6} xl={6}  >
         
        </Grid>
        <Grid item  xs={12} sm={12} md={12} lg={6} xl={6} sx={{display:"flex", flexDirection:"column" , alignItems:"center", justifyContent:"center"}}>
        <Typography  ml={1}>We provide Tender info and Timely Alerts to Contractors all across Pakistan . We get Tenders information from PPRA website and then Notify Contractors through SMS Service</Typography>
        <Link href="/form"><Button sx={{ backgroundColor:"rgb(255, 215, 0)", color:"Black", marginTop:3,marginBottom:2, "&:hover": {backgroundColor:"rgb(255, 215, 0)", color:"Black"}}}>Click Here to Use our Service</Button></Link>
        
        </Grid>
     </Grid>
     </div>
     <div style={{display: min900 ? "block" : 'none'}}>
       <Grid container sx={{backgroundColor:"#14613D", display:"flex", flexDirection:"row", color:"white"}}>
       <Grid item  xs={12} sm={12} md={12} lg={6} xl={6} sx={{display:"flex", flexDirection:"column" , justifyContent:"center",}}>
          <Typography  ml={3} mb={1} sx={{fontSize:40, fontWeight:"bold"}}>Pakistan #1 free Tender Alert Services</Typography>
          <Typography  ml={3}>We provide Tender info and Timely Alerts to Contractors all across Pakistan . We get Tenders information from PPRA website and then Notify Contractors through SMS Service</Typography>
          <Link href="/form"><Button sx={{ backgroundColor:"rgb(255, 215, 0)", color:"Black", marginTop:3,marginBottom:2,  marginLeft:3,"&:hover": {backgroundColor:"rgb(255, 215, 0)", color:"Black"}}}>Click Here to Use our Service</Button></Link>
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={6} xl={6}   >
          <Image src="/hero.png"   width={580}
        height={400} alt="hero" />
      
        </Grid>
      </Grid>
      </div>
      </div>
     );
}
 
export default Hero;