import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Button from "@mui/material/Button";
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {Box,Grid } from '@mui/material';
import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from "next/router";
import Alert from '@mui/material/Alert';
const RegisteredUser = (props) => {
  console.log("props in reg", props)
  const router = useRouter();
  const [cnic, setCnic]=React.useState('');
  const [phone, setPhone]=React.useState('');
  const [successMsg, setSuccessMsg]= React.useState(null)
  const [errorMsg, setErrorMsg]= React.useState(null)
  const DataBody=(body) =>{
    userRegisterData(body)
   
  }
  const userRegisterData= async (body)=>{
    await getUserRegisterData(body)
    
}
  const formik = useFormik({
    initialValues: {
      phone: '',
      cnic:'',
    },
    validationSchema: Yup.object({
      phone: Yup.string()
      .matches(/^\d+$/, 'The field should have digits only')
      // .max(11, 'Must be 11 characters')
      .required('Required'),
      cnic: Yup.string()
      .matches(/^[0-9]{5}[-]{1}[0-9]{7}[-]{1}[0-9]{1}$/, 'Please enter valid cnic format xxxxx-xxxxxxx-x')
      .required('Required'),
    
    }),
    onSubmit: values => {
      let body ={
             packageId: props.id,
             pass: "jlkzxc@&*(sa213OIF",
              phone: values.phone,
              cnic: values.cnic,
              
            }
            console.log(" i am here",body)
            DataBody(body)
    },
  });
  const getUserRegisterData= async (body)=>{
   
    console.log('body is', body)
 let response=   await fetch("https://api.pakthaika.com/api/user/isUserRegister", {
           method: 'POST',
           headers: {
             "content-type": "application/json",
           },
           body:JSON.stringify(body)
          
})
let newResponse= await  response.json()
console.log("newRess", newResponse)
if( newResponse && newResponse.statusCode==500){
  setErrorMsg(newResponse.message)
  setSuccessMsg(null)
} else {
  
  setSuccessMsg(newResponse.message)
  setErrorMsg(null)
  if(props.packageType=='Free'){
    router.push('/Thankyou')
  }
  else {
    router.push('/PaymentDetails')
  }
  }
}
    return (  <>
    <Grid container sx={{ display:"flex", flexDirection:"column",  textAlign:"center", justifyContent:"center", alignItems:"center", 
      }} >
         <Grid item sm={12} md={12} lg={12} mb={2}>
    <TextField sx={{width:{sm:250 ,md: 300, lg:490}}}
        id="phone"
        name="phone"
        label="Phone No"
        onChange={formik.handleChange}
        value={formik.values.phone}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PhoneIphoneIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
       { formik.touched.phone || formik.errors.phone ? (
         <div>{formik.errors.phone}</div>
       ) : null}
       </Grid>
             <Grid item sm={12} md={12} lg={12} mb={2} >
      <TextField sx={{width:{sm:250 ,md: 300, lg:490}}}
       id="cnic"
       name="cnic"
        label="Cnic"
        onChange={formik.handleChange}
        value={formik.values.cnic}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
       { formik.touched.cnic || formik.errors.cnic ? (
         <div>{formik.errors.cnic}</div>
       ) : null}
      </Grid>
      { successMsg ? 
              <Alert variant="filled" severity="success">
              {successMsg}
              </Alert> : null}
              { errorMsg ?
             <Alert variant="filled" severity="error">
              {errorMsg}
           </Alert> : null 
}
      </Grid>
      <Box
  m={3}
  display="flex"
  justifyContent="center"
  alignItems="center"
 
>
    <Button variant="contained"  sx={{width:170, height:40,backgroundColor:"#14613D", color:"white", "&:hover": {backgroundColor:"#14613D", color:"white"}}} onClick={formik.handleSubmit}>
  Subscribe
</Button>
</Box>
    </>);
}
 
export default RegisteredUser;