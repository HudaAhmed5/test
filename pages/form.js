import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Box,Grid } from '@mui/material';
import Free from "../comps/free";
import Paids from "../comps/paids";
import TextField from '@mui/material/TextField';
import Navbar from '../comps/Navbar';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Button from "@mui/material/Button";
import Footer from '../comps/Footer';
import RegisteredUser from '../comps/RegisteredUser';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
 

  return (
   
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Form() {
  
  const [id, setId]= React.useState("");
  const [value, setValue] = React.useState(0);
  const [valuee, setValuee] = React.useState(0);
    const [user, setUser] = React.useState("one");
    const [reg, setReg]=  React.useState(false);
   const [successMsg, setSuccessMsg]= React.useState(null)
   const [otherMsg, setotherMsg]= React.useState(null)
   const [errorMsg, setErrorMsg]= React.useState(null)
   const [phoneNum , setPhoneNum]= React.useState('')
   const [packageType, setPackageType] = React.useState("");
   const [freeMsg, setFreeMsg]=React.useState("");
   const [paidMsg, setPaidMsg]=React.useState("");
   const [pid, setPId]= React.useState(false)
   const router = useRouter();
  React.useEffect(() => {
    console.log("paid id is", id , "success", successMsg , errorMsg)
  }, [successMsg, errorMsg , id]);
  React.useEffect(() => {
    console.log("type is", packageType, "duration", paidMsg)
  }, [packageType]);
 console.log("paid msg is", paidMsg)
    const DataBody=(body) =>{
      registerData(body)
     
    }

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        phone: '',
        cnic:'',
        company:'',
        caddress:'',
        grade:'',
        category:'',
        city:'',
      },
      validationSchema: Yup.object({
        name: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string()
        .matches(/^\d+$/, 'The field should have digits only')
        // .max(11, 'Must be 11 characters')
        .required('Required'),
        cnic: Yup.string()
        .matches(/^[0-9]{5}[-]{1}[0-9]{7}[-]{1}[0-9]{1}$/, 'Please enter valid cnic format xxxxx-xxxxxxx-x')
        .required('Required'),
        company: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        caddress: Yup.string()
        .max(45, 'Must be 45 characters or less')
        .required('Required'),
        category: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        grade: Yup.string().required('Required'),
      }),
      onSubmit: values => {
        setPhoneNum(values.phone)
        let body ={
               packageId:id,
               pass: "jlkzxc@&*(sa213OIF",
                name:values.name,
                email:values.email,
                phone: values.phone,
                cnic: values.cnic,
                companyName: values.company,
                companyAddress: values.caddress,
                selectedCategory: [values.category],
                selectedLocation: [values.city],
                grade: values.grade,
              }
              setPId(body.packageId)
              DataBody(body)
              if(body.packageId){
              router.push({
                pathname: '/Token',
                query: {phoneNum: values.phone, packageType:packageType}
            })
          }
        
      },
    });
  
    const registerData= async (body)=>{
         await getRegistrationData(body)
         
    }
    const getRegistrationData= async (body)=>{
       console.log('body is', body)
    let response=   await fetch("http://localhost:3005/api/user/addUser", {
              method: 'POST',
              headers: {
                "content-type": "application/json",
              },
              body:JSON.stringify(body)
             
  })
  let newResponse= await  response.json()
  if( newResponse && newResponse.statusCode==412){
    setErrorMsg(newResponse.message)
    setSuccessMsg(null)
  }
    else if( newResponse.statusCode==500){
    setotherMsg(newResponse.message)
    setSuccessMsg(null)
    setErrorMsg(null)
    }
   else {
    setSuccessMsg(newResponse.message)
    setErrorMsg(null)
  }

    }
 //tabs onChange functions
    const handleeChange = (event, newValue) => {
      setValuee(newValue);
    };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
  <Navbar />
  <Typography variant='h4' mt={3} sx={{display:"flex", textAlign:"center", justifyContent:"center", typography: { sm: 'h5', xs: 'h6',lg:"h4" }}}>
      Choose Your Subscription Package
     </Typography>
    <Grid container  sx={{display:'flex', justifyContent:"center" , }}>
    <Grid item sx={{   justifyContent:"center", alignItems:"center", textAlign:"center"}}>
      <Box mt={2} mb={2} sx={{ width: "100%", display:"flex", textAlign:"center", justifyContent:"center"}}>
     <Tabs 
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: { background: "#14613D" }
        }}
        sx={{
          "& button": { borderRadius: 1, backgroundColor:"	#D8D8D8" , },
          "& button:focus": { backgroundColor: "#14613D" },
        }}
       >
          <Tab  sx={{"&:focus": {color:"white"}}} label="Free" {...a11yProps(0)} />
          <Tab   sx={{"&:focus": {color:"white"}}} label="Paid" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Free setId={setId} setPackageType={setPackageType} setFreeMsg={setFreeMsg} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paids setId={setId} setPackageType={setPackageType} setPaidMsg={setPaidMsg} />
      </TabPanel>
      <Typography  mt={3} sx={{display:"flex", textAlign:"center", justifyContent:"center", color:"dimgray",typography: { sm: 'h4', xs: 'h7',lg:'h4',md:'h4' } }}>
     Give Your Details & enjoy our Service
   </Typography>
   <Box sx={{ }}>
      <Box mt={2} mb={2} sx={{ width: "100%", display:"flex", textAlign:"center", justifyContent:"center"}}>
     <Tabs 
        value={valuee}
        onChange={handleeChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: { background: "#14613D", color:"white" }
        }}
        sx={{
        
          "& button": { borderRadius: 1, backgroundColor:"	#D8D8D8" },
          "& button:focus": { backgroundColor: "#14613D" },
        }}
       >
          <Tab sx={{"&:focus": {color:"white"}}} onClick={()=>setReg(false)}  label="New User" {...a11yProps(0)} />
          <Tab  sx={{"&:focus": {color:"white"}}} onClick={()=>setReg(true)} label="Registered User" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {/* <TabPanel value={valuee} index={0}>
        User
      </TabPanel> */}
      <TabPanel value={valuee} index={1}>
        <RegisteredUser id={id} packageType={packageType} />
      </TabPanel>
      </Box>
      {freeMsg && packageType==="Free" ?
      <Alert>You have selected {packageType} package with a duration of {freeMsg}</Alert> : null 
}
{paidMsg && packageType==="Paid" ?
      <Alert>You have selected {packageType} package with a duration of {paidMsg}</Alert> : null 
}
      {reg==false ?
      
    <Grid container sx={{ display:"flex", flexDirection:"column",  textAlign:"center", justifyContent:"center", alignItems:"center", 
      }} >
     <Grid item sm={12} md={12} lg={12} mb={2} >
      <TextField sx={{width:{ xs:250 ,sm:390 ,md: 480, lg:560}}}
        id="name"
        name="name"
        label="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        // onChange={(e)=>setName(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      { formik.touched.name || formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
     </Grid>
     <Grid item sm={12} md={12} lg={12} mb={2}>
    <TextField sx={{width:{ xs:250 ,sm:390 ,md: 480, lg:560}}}
        id="phone"
          name="phone"
        label="Phone No"
        // onChange={(e)=>setPhone(e.target.value)}
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
       <Grid item sm={12} md={12} lg={12} mb={2}>
     <TextField sx={{width:{ xs:250 ,sm:390 ,md: 480, lg:560}}}
          id="email"
          name="email"
          type="email"
        label="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />  {formik.touched.email || formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      </Grid>
      <Grid item sm={12} md={12} lg={12} mb={2} >
      <TextField sx={{width:{ xs:250 ,sm:390 ,md: 480, lg:560}}}
        id="cnic"
        name="cnic"
        label="Cnic"
        onChange={formik.handleChange}
        value={formik.values.cnic}
        // onChange={(e)=>setCnic(e.target.value)}
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
       <Grid item sm={12} md={12} lg={12} mb={2}>
       <TextField sx={{width:{ xs:250 ,sm:390 ,md: 480, lg:560}}}
     id="company"
     name="company"
     label="Company"
     onChange={formik.handleChange}
     value={formik.values.company}
        // onChange={(e)=>setCompany(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <BusinessIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
       { formik.touched.company || formik.errors.company ? (
         <div>{formik.errors.company}</div>
       ) : null}
      </Grid>
      <Grid item sm={12} md={12} lg={12} mb={2}>
    <TextField sx={{width:{ xs:250 ,sm:390 ,md: 480, lg:560}}}
         id="caddress"
         name="caddress"
         label="Company Address"
         onChange={formik.handleChange}
         value={formik.values.caddress}
        // onChange={(e)=>setCaddress(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <BusinessIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
       { formik.touched.caddress || formik.errors.caddress ? (
         <div>{formik.errors.caddress}</div>
       ) : null}
      </Grid>
       <Grid item sm={12} md={12} lg={12} mb={2}>
          <FormControl variant="standard"sx={{width:{ xs:250 ,sm:390 ,md: 480, lg:560}}}>
      <InputLabel id="demo-simple-select-standard-label">Grade</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="grade"
        name="grade"
        label="Grade"
        onChange={formik.handleChange}
        value={formik.values.grade}
        // value={grade}
        // onChange={(e)=>{setGrade(e.target.value)}}
      >
        <MenuItem value="">
          Any
        </MenuItem>
         <MenuItem value={0}>C-6</MenuItem>
          <MenuItem value={1}>C-5</MenuItem>
          <MenuItem value={2}>C-4</MenuItem>
          <MenuItem value={3}>C-3</MenuItem>
          <MenuItem value={4}>C-2</MenuItem>
          <MenuItem value={5}>C-1</MenuItem>
          <MenuItem value={6}>C-B</MenuItem>
          <MenuItem value={6}>C-A</MenuItem>
      </Select>
      </FormControl>
      { formik.touched.grade || formik.errors.grade ? (
         <div>{formik.errors.grade}</div>
       ) : null}
      </Grid>

       <Grid item sm={12} md={12} lg={12} mb={2}>
          <FormControl variant="standard"sx={{width:{ xs:250 ,sm:390 ,md: 480, lg:560}}}>
      <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="category"
        name="category"
        label="Category"
        onChange={formik.handleChange}
        value={formik.values.category}
        // value={category}
        // onChange={(e)=>{setCategory(e.target.value)}}
      >
        <MenuItem value="">
          Any
        </MenuItem>
         <MenuItem value={0}>Animation</MenuItem>
          <MenuItem value={1}>Appilances</MenuItem>
          <MenuItem value={2}>Chemical items</MenuItem>
          <MenuItem value={3}>Electrical items</MenuItem>
          <MenuItem value={4}>Civil Goods</MenuItem>
          <MenuItem value={5}>Food items</MenuItem>
          <MenuItem value={6}>Leasing</MenuItem>
      </Select>
      </FormControl>
      { formik.touched.category || formik.errors.category ? (
         <div>{formik.errors.category}</div>
       ) : null}
      </Grid>
      <Grid item sm={12} md={12} lg={12} mb={2} >
           <FormControl variant="standard"sx={{width:{ xs:250 ,sm:390 ,md: 480, lg:560}}}>
      <InputLabel id="demo-simple-select-standard-label">City</InputLabel>
      <Select
        // labelId="demo-simple-select-standard-label"
        id="city"
        name="city"
        label="City"
        onChange={formik.handleChange}
        value={formik.values.city}
        // value={city}
        // onChange={(e)=>{setCity(e.target.value)}}
        
      >
        <MenuItem value="">
          Zhob
        </MenuItem>
         <MenuItem value={0}>Wazirisatan</MenuItem>
          <MenuItem value={1}>Wah cantt</MenuItem>
          <MenuItem value={2}>Gujranwala</MenuItem>
          <MenuItem value={3}>Washington DC</MenuItem>
          <MenuItem value={4}>Warsaw</MenuItem>
          <MenuItem value={5}>Turkey</MenuItem>
          <MenuItem value={6}>Swabi</MenuItem>
          <MenuItem value={7}>Swat</MenuItem>
      </Select>
      </FormControl>
      { formik.touched.city || formik.errors.city ? (
         <div>{formik.errors.city}</div>
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
        {/* not selected package */}
          { otherMsg && !pid ?
             <Alert variant="filled" severity="error">
              {otherMsg}
           </Alert> : null 
        }
     </Grid> 
     : null 
}
{reg==false ?
     <Box
  m={3}
  display="flex"
  justifyContent="center"
  alignItems="center"
 
>
    <Button variant="contained"  onClick={formik.handleSubmit} sx={{width:170, height:40, backgroundColor:"#14613D", color:"white", "&:hover": {backgroundColor:"#14613D", color:"white"}}}> 
  Subscribe
</Button>
  
</Box> : null 
}
    </Grid>
    </Grid>
     <Footer />
    </>
  );
}




