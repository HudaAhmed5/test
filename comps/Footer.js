import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {Button, Grid} from '@mui/material';
import {useMediaQuery } from "@mui/material"
import Feedback from '../comps/Feedback'
import { Typography } from '@mui/material';

const Footer = () => {
   const [open, setOpen] = React.useState(false);
    const mx1200= useMediaQuery('(max-width:1200px)', '(min-width:270)')
    const min1200= useMediaQuery('(min-width: 1201px)')
    const max380 = useMediaQuery('(max-width: 380px)')
    return ( <>
    <div style={{display: min1200 ? "block" : 'none'}}>
    <Grid container  sx={{backgroundColor:" #14613D", justifyContent:"center"}}>
     <Grid item lg={4} sm={4} md={4} mt={3} sx={{ justifyContent:"center", alignItems:"center", textAlign:"center"}}>
      <Image src="/Logo 1.png" width={260} height={80} alt='logo'/>
     </Grid>
     <Grid item lg={2} sm={2} md={2} mt={4} >
     <Image className={styles.footerimg} src="/fb.png" height={40} width={40} mt={2}  alt='fb'/>
     <Image src="/insta.png"  height={40} width={40}  alt='insta'/>
     <Image  className={styles.footerimg} src="/ln.png"  height={40} width={40}  alt='LI'/>
     <Image src="/twitter.png"  height={40} width={40}  alt='twitter'/>
     </Grid>
     <Grid item lg={3} sm={3} md={3} mt={5.5} ml={4}  sx={{ justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <Button onClick={()=>{  setOpen(true) }} sx={{backgroundColor:"white", color:"black", '&:hover': {
    backgroundColor: 'white',
    boxShadow: 'none',
  },}}>Give your feedback</Button>
     </Grid>
     <Grid item lg={2} sm={2} md={2} mt={1} ml={4} >
        <Image src="/footer.png" height={120} width={120} alt="icon" />
        </Grid>
        <Grid Item >
        <Typography variant="h7" sx={{color:"white"}} >
        Copyright © 2022 INEFFABLE DEVS. All rights reserved
        </Typography>
        </Grid>
    </Grid>
    </div>
    <div style={{display: mx1200 ? "block" : 'none'}}>
    <Grid container  sx={{backgroundColor:" #14613D", justifyContent:"center"}}>
        <Grid item lg={12} sm={12} md={12} mt={3} sx={{ justifyContent:"center", alignItems:"center", textAlign:"center"}}>
      <Image src="/logo.png" width={210} height={60} alt='logo'/>
     </Grid>
     <Grid item lg={12} sm={12} md={12} xs={12} mt={3}  sx={{ justifyContent:"center", alignItems:"center", textAlign:"center", display:"flex"}}>
     <Image className={styles.footerimg} src="/fb.png" height={40} width={40} mt={1} alt="fb" />
     <Image className={styles.footerimg} src="/insta.png"  height={40} width={40} mt={1}  alt='insta'/>
     <Image  className={styles.footerimg} src="/ln.png"  height={40} width={40}  alt='LI'/>
     <Image  className={styles.footerimg} src="/twitter.png"  height={40} width={40}  alt='twitter'/>
        </Grid>
        <Grid item lg={12} sm={12} md={12} xs={12} mt={4} ml={1} sx={{ justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <Button onClick={()=>{ setOpen(true) }} sx={{backgroundColor:"white", color:"black", width:"180px", height:"40px", fontSize:"11px", '&:hover': {
    backgroundColor:'white',
    boxShadow: 'none',
  },}}>Give your feedback</Button>
     </Grid>
     <Grid Item lg={12} sm={12} md={12} mt={4} ml={3} sx={{ justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <Typography variant="body2" sx={{color:"white"}} >
        Copyright © 2022 INEFFABLE DEVS.
        </Typography>
        </Grid>
     </Grid>
     <Feedback open={open} setOpen ={setOpen} />
        </div>
       
    </> );
}
 
export default Footer;