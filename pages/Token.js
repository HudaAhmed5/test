import * as React from "react";
import { useState } from "react";
import {Grid} from '@mui/material';
import { Card,  Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useEffect } from "react";
import Alert from '@mui/material/Alert';
import {useMediaQuery } from "@mui/material"
const Token = () => {
  const router = useRouter();
  const phone = router.query.phoneNum;
  const packageType= router.query.packageType;
  const[otp , setOtp]=useState('')
  const [seconds, setSeconds] = useState(120)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [successMsg , setSuccessMsg]= useState("")
  const [invalid , setInvalid]= useState("")
  const [errorMsg , setErrorMsg]= useState("")
  const [lateVerification , setLateVerification]= useState(false)
  
  const medium= useMediaQuery('(max-width:970px)')
useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000) 
    } 
    else {
      setSeconds(0)
        setIsButtonDisabled(false)
    
    }
  }, [seconds])

  const tokenData= async ()=>{
    await getTokenData()
}
const tokenDataAgain= async ()=>{
  await getTokenAgain()
  setSeconds(120)
  setIsButtonDisabled(true)
  setLateVerification(false)
}

  const getTokenData= async ()=>{
    let body={
      username: phone,
      token: otp
    }
    let otpCall = await  fetch(`http://localhost:3005/api/user/userVerifyToken`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      
      body:JSON.stringify(body)     
  })
  
  let otpResponse= await  otpCall.json()
 if (otpResponse && otpResponse.statusCode==412){
  setErrorMsg(otpResponse.message)
  setLateVerification(true)
  setSuccessMsg(null)
 } 
 else if(otpResponse.statusCode==500){
  setInvalid(otpResponse.message)
  setSuccessMsg(null)
  setErrorMsg(null)
 }
 else {
  setSuccessMsg(otpResponse.message)
  setErrorMsg(null)
  if(packageType=='Free'){
  router.push('/Thankyou')
  }
  else 
  {
    router.push('/PaymentDetails')
  }
 }
  }

      const getTokenAgain= async ()=>{
        let body={
          username: phone,   
        }
        let otpRequest = await  fetch(`http://localhost:3005/api/user/userRequestToken`, {
          method: 'POST',
          headers: {
            "content-type": "application/json",
          },        
          body:JSON.stringify(body)          
      })
      
      let otpResponseAgain= await  otpRequest.json()
      }

    return ( <>
    {medium ?
    <Grid container  direction='column' justifyContent='center' alignItems="center" >
      <Grid item   lg={6} md={6} sm={5} sx={{}}>
         <Image src="/POtp.png" height={670} width={690} layout={"responsive"} alt="otp"/>
         </Grid>
         <Grid item lg={6} md={6} sm={7} sx={{   textAlign:"center"}}>
          <Card  sx={{backgroundColor:'rgb(241, 241, 241)',     justifyContent:"center" ,alignItems:"center", marginBottom:10,  width: {
      sm: 410,
      xs: 320,
      md: 410,
      lg: 500
    }, height: {
      xs: 320,
      sm: 380,
      md: 300,
      lg: 300
    }}} >
          <CardContent>
          <Typography  mb={2} sx={{ fontSize: 20 , color:"black"
         }}>
             Enter the Tender Code sent to your Phone
          </Typography>
          <TextField  onChange={(e)=>setOtp(e.target.value)} mb={4} sx={{ width: {
      sm: 250,
      md: 320,
      lg: 380
    },}} id="outlined-basic" label="Enter Token" variant="outlined" />
          <Button onClick={tokenData} sx={{backgroundColor:"#14613D", color:"white", height: 45, marginTop:2, width: {
      sm: 250,
      xs: 150,
      md: 320,
      lg: 380
    }, 
           "&:hover": {backgroundColor:"#14613D", color:"white"}
         }}>
            Verify OTP
          </Button>
          <Button onClick={tokenDataAgain}  
          disabled={isButtonDisabled}
          sx={{backgroundColor:"lightGray", color:"white", height: 45,  marginTop:2, width: {
      sm: 250,
      xs: 150,
      md: 320,
      lg: 380
    },
           "&:hover": {backgroundColor:"lightGray", color:"white"}
         }}>
           {seconds === 0 ? 'Resend OTP' : `Resend OTP in ${seconds} seconds`}
          </Button>
            </CardContent>
          </Card>
          { successMsg ? 
              <Alert sx={{heightL: 50 , width:300 , marginTop: 3, marginLeft:'auto', marginRight:'auto', justifyContent:"center",}}  variant="filled" severity="success">
              {successMsg}
              </Alert> : null}
              {/* {console.log("error ", errorMsg , "latee", lateVerification)} */}
              { errorMsg || lateVerification?
             <Alert sx={{heightL: 50 , width:300, marginTop: 3, marginLeft:'auto', marginRight:'auto', justifyContent:"center", }}   variant="filled" severity="error">
              {errorMsg}
           </Alert> : null 
        }
          { invalid  && !lateVerification && !successMsg && !errorMsg?
             <Alert sx={{heightL: 50 , width:300, marginTop: 3, marginLeft:'auto', marginRight:'auto', justifyContent:"center", }}   variant="filled" severity="error">
              {invalid}
           </Alert> : null 
        }
         </Grid>
    </Grid> 
    :
   
       <Grid container  direction='row' justifyContent='center' alignItems="center" >
         <Grid item lg={6} md={6} sm={7} sx={{   justifyContent:"center" ,alignItems:"center", textAlign:"center", flexWrap:'wrap'}}>
          <Card  sx={{backgroundColor:'rgb(241, 241, 241)', opacity:0.8 ,marginLeft:10,  justifyContent:"center" ,alignItems:"center",   width: {
      sm: 320,
      xs: 290,
      md: 380,
      lg: 500
    }, height: {
      xs: 290,
      sm: 280,
      md: 280,
      lg: 300
    }}} >
          <CardContent>
          <Typography  mb={2} sx={{ fontSize: 20 , color:"gray"
         }}>
             Enter the Tender Code sent to your Phone
          </Typography>
          <TextField  onChange={(e)=>setOtp(e.target.value)} mb={4} sx={{ width: {
      sm: 250,
      md: 320,
      lg: 380
    },}} id="outlined-basic" label="Enter Token" variant="outlined" />
          <Button onClick={tokenData} sx={{backgroundColor:'#14613D', color:"white", height: 45, marginTop:2, width: {
      sm: 250,
      xs: 150,
      md: 320,
      lg: 380
    }, 
           "&:hover": {backgroundColor:'#14613D', color:"white"}
         }}>
            Verify OTP
          </Button>
          <Button onClick={tokenDataAgain}  
          disabled={isButtonDisabled}
          sx={{backgroundColor:"gray", color:"white", height: 45,  marginTop:2, width: {
      sm: 250,
      xs: 150,
      md: 320,
      lg: 380
    },
           "&:hover": {backgroundColor:"gray", color:"white"}
         }}>
           {seconds === 0 ? 'Resend OTP' : `Resend OTP in ${seconds} seconds`}
          </Button>
            </CardContent>
          </Card>
          { successMsg ? 
              <Alert sx={{heightL: 50 , width:300 , marginTop: 3, marginLeft:'auto', marginRight:'auto', justifyContent:"center",}}  variant="filled" severity="success">
              {successMsg}
              </Alert> : null}
              {/* {console.log("error ", errorMsg , "latee", lateVerification)} */}
              { errorMsg || lateVerification?
             <Alert sx={{height: 50 , width:300, marginTop: 3, marginLeft:'auto', marginRight:'auto', justifyContent:"center", }}   variant="filled" severity="error">
              {errorMsg}
           </Alert> : null 
        }
          { invalid  && !lateVerification && !successMsg && !errorMsg?
             <Alert sx={{heightL: 50 , width:300, marginTop: 3, marginLeft:'auto', marginRight:'auto', justifyContent:"center", }}   variant="filled" severity="error">
              {invalid}
           </Alert> : null 
        }
         </Grid>
         <Grid item   lg={6} md={6} sm={5} sx={{}}>
         <Image src="/POtp.png" height={670} width={690} layout={"responsive"} alt="otp"/>
         </Grid>
       </Grid>
}
    </> );
}
 
export default Token;