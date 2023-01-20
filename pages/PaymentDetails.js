import * as React from "react";
import {Grid , Typography} from '@mui/material';
import Footer from '../comps/Footer'
import Image from 'next/image';
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import {useMediaQuery } from "@mui/material"
const PaymentDetails  = () => {
   const medium= useMediaQuery('(max-width:970px)')
    return ( 
    <>
       <Grid container  direction='row' justifyContent="center" sx={{marginTop:1 , marginBottom:2}}>
       <Link href={"/"} passHref><Image src="/logo.png" alt="logooo" width={195} height={65}  /></Link>
       </Grid>
        { medium ?
       
       <Grid  container  direction="column" justifyContent='center' alignItems="center" >
         <Grid  item   position='relative'>
        <Image src="/Payment.png" alt="loogo" width={500} height={500} layout="responsive" objectFit='cover'  />
        </Grid>
        <Grid item  >
       <Card  sx={{backgroundColor:'rgb(241, 241, 241)', opacity:0.9,  textAlign:"center", marginTop:5,  marginBottom:5, borderRadius: 3, width: {
      sm: 440,
      xs: 350,
      md: 400,
      lg: 500
    }, height: {
      xs: 350,
      sm: 350,
      md: 350,
      lg: 320
    }}} >
         <CardContent>
         <Typography  variant='h6' sx={{ fontWeight: 'bold'}} align="center">
            You can Pay here.
          </Typography>
          <Grid item mt={2}>
          <Image src='/bank.png' alt="banklogo" width={42} height={30} sx={{marginRight:10}} /> 
           <Typography sx={{marginLeft:2, fontWeight: 'bold', marginTop:0.5 }} align="center" >Habib Bank Limited</Typography>
          </Grid>
          <Typography sx={{fontSize:"22", marginTop:2,fontWeight: 'bold'}} align="center">
             <span className={styles.textSpan}>Bank:</span>  Habib Bank Limited
          </Typography>
          <Typography sx={{fontSize:"22", fontWeight: 'bold'}}>
          <span className={styles.textSpan}>Account Title:</span> Ali Wajdan Ansari
          </Typography>
          <Typography sx={{fontSize:"22", fontWeight: 'bold',}}>
          <span className={styles.textSpan}>Account Number:</span>  13597991840803
          </Typography>
          <Grid item mt={1} mb={2} sx={{display:"flex",flexDirection:"row",  justifyContent:"center"}}>
          <Image src='/whatsapp.png' alt="whatsapplogo" width={42} height={32} sx={{marginRight:10}} /> 
           <Typography sx={{marginLeft:2,fontWeight: 'bold',marginTop:0.5}} align="center" >03365517889</Typography>
          </Grid>
          <Typography variant="h7" sx={{fontWeight: 'bold'}} >
          Share Image of your payment in  above mentioned whatsapp number
          </Typography>
         </CardContent>
        </Card>
            </Grid>
            </Grid>
         :
       <Grid  container spacing={2} direction="row"    justifyContent='center' alignItems="center" >
      <Grid item lg={5} >
       <Card  sx={{backgroundColor:'rgb(241, 241, 241)', opacity:0.9, marginLeft:10,  justifyContent:"center" ,alignItems:"center", textAlign:"center",   borderRadius: 3, width:470, height: 340
   }} >
         <CardContent>
         <Typography  variant='h5' sx={{ fontWeight: 'bold', marginTop:1}} align="center">
            You can Pay here.
          </Typography>
          <Grid item mt={2} sx={{display:"flex",flexDirection:"row",  justifyContent:"center"}}>
          <Image src='/bank.png' alt="banklogo" width={42} height={30} sx={{marginRight:10}} /> 
           <Typography sx={{marginLeft:2, fontWeight: 'bold', marginTop:0.5 }} align="center" >Habib Bank Limited</Typography>
          </Grid>
          <Typography sx={{fontSize:"22", marginTop:2,fontWeight: 'bold'}} align="center">
             <span className={styles.textSpan}>Bank:</span>  Habib Bank Limited
          </Typography>
          <Typography sx={{fontSize:"22", fontWeight: 'bold'}}>
          <span className={styles.textSpan}>Account Title:</span> Ali Wajdan Ansari
          </Typography>
          <Typography sx={{fontSize:"22", fontWeight: 'bold',}}>
          <span className={styles.textSpan}>Account Number:</span>  13597991840803
          </Typography>
          <Grid item mt={1} mb={2} sx={{display:"flex",flexDirection:"row",  justifyContent:"center"}}>
          <Image src='/whatsapp.png' alt="whatsapplogo" width={42} height={32} sx={{marginRight:10}} /> 
           <Typography sx={{marginLeft:2,fontWeight: 'bold',marginTop:0.5}} align="center" >03365517889</Typography>
          </Grid>
          <Typography variant="h7" sx={{fontWeight: 'bold'}} >
          Share Image of your payment in  above mentioned whatsapp number
          </Typography>
         </CardContent>
        </Card>
            </Grid>
        <Grid  item  lg={7} mb={2}  position='relative' >
        <Image src="/Payment.png" alt="loogo" width={800} height={505}    />
        </Grid>
       </Grid>
}
       <Footer />
    </>);
}
 
export default PaymentDetails;