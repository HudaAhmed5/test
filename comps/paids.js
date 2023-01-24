import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FirstMonth from './FirstMonth';
import ThreeMonths from './ThreeMonths';
import SixMonths from './SixMonths';
import Oneyear from './Oneyear';
import {Grid } from '@mui/material';
import {useMediaQuery } from "@mui/material"
function TabPanel(tabprops) {
  const { children, value, index, ...other } = tabprops;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Paid(props) {
  const mx1200= useMediaQuery('(max-width:1200px)')
  const min1200= useMediaQuery('(min-width: 1202px)')
  const [value, setValue] = React.useState(0);
   const [paidApiData, setPaidApiData]=React.useState('')
   const [newArray, setNewArray] = React.useState([]);

   const paidPackage= async ()=> {
    await getPaidApiData()
}


   const getPaidApiData= async () => {
    await fetch('https://api.pakthaika.com/api/user/getPaidPackage',{
              method: 'GET',
          headers: {
              'content-type': 'application/json'
   },
  })
      .then(response => response.json())
      .then((data) =>  {
        setPaidApiData(data)
        let newArr=[]
        data.packageList?.map((item)=>{
          let x={
            ...item, checked:false,
          }
             newArr.push(x)
        })
        console.log("newarr", newArr);
        setNewArray(newArr);
      });
  }
//   React.useEffect(() => {
//    console.log("dura", props.paidMsg)
//  }, [])

  React.useEffect(() => {
    paidPackage()
 }, [])

  //  console.log("Paid Package", paidApiData )
  //  console.log("Paid Package123", paidApiData.packageList)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
     <div style={{display: min1200 ? "block" : 'none'}}>
    <Box
      sx={{ flexGrow:1, bgcolor: 'background.paper', display: 'flex', }}
    >
      <Tabs
          orientation="vertical"
          value={value}
          textColor="inherit"
          onChange={handleChange}
          aria-label="Vertical tabs example"
          TabIndicatorProps={{
            style: { background: "#14613D" }
          }}
          sx={{ borderRight: 1, borderColor: 'divider', width:300, "& button": { borderRadius: 1, backgroundColor:"	#D8D8D8" },
          "& button:focus": { backgroundColor: "#14613D", color:"white" }, }}
        >
    
        <Tab label="1 Month" {...a11yProps(1)} />
        <Tab label="3 Months" {...a11yProps(2)} />
        <Tab label="6 Months" {...a11yProps(3)} />
        <Tab label="12 Months" {...a11yProps(4)} />
        
      </Tabs>
      
      <Box   >
      <TabPanel value={value} index={0}>
        <FirstMonth newArray={newArray && newArray} setId={props.setId} setNewArray={setNewArray} setPaidMsg={props.setPaidMsg} setPackageType={props.setPackageType}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      < ThreeMonths newArray={newArray && newArray} setId={props.setId} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        < SixMonths newArray={newArray && newArray} setId={props.setId} />
      </TabPanel>
      <TabPanel value={value} index={3}>
         <Oneyear newArray={newArray && newArray} setId={props.setId} />
      </TabPanel>
      </Box>
      
    </Box>
    </div>
    <div style={{display: mx1200 ? "block" : 'none'}}>
      <Grid container  sx={{justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <Grid item >
    <Box sx={{  borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  
  TabIndicatorProps={{
            style: { background: "#14613D" }
          }}
          sx={{  '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap',}, borderColor: 'divider', "& button": { borderRadius: 1, backgroundColor:"	#D8D8D8" ,},
          "& button:focus": { backgroundColor: "#14613D", color:"white" },  }}
        >
    <Tab  label="30days" {...a11yProps(0)}  />
    <Tab label="90days" {...a11yProps(1)} />
    <Tab label="120days" {...a11yProps(2)} />
    <Tab label="365days" {...a11yProps(3)} />
  </Tabs>
</Box>
</Grid>

<Grid>

<TabPanel value={value} index={0}>
   <FirstMonth newArray = {newArray && newArray} setId={props.setId} setNewArray={setNewArray} setPaidMsg={props.setPaidMsg} setPackageType={props.setPackageType}/>
</TabPanel>

<TabPanel value={value} index={1}>
  < ThreeMonths newArray={newArray && newArray} setId={props.setId}/>
</TabPanel>
<TabPanel value={value} index={2}>
< SixMonths newArray={newArray && newArray} setId={props.setId} />
</TabPanel>
<TabPanel value={value} index={3}>
< Oneyear  newArray={newArray && newArray} setId={props.setId} />
</TabPanel>
</Grid>
</Grid>
    </div>
    </>
  );
}
