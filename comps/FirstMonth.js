import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
const FirstMonth = (props) => {
  const [paidPackageId, setPaidPackageId] = React.useState("");
  const [selectedPackage, setSelectedPackage] = React.useState("");
  const [packageId, setPackageId] = React.useState("");
   let x= props.newArray
  console.log("firstprops are", props)
  return (
  
    <Box sx={{display:"flex", flexWrap:"wrap"}}>
      {x?.map((item, index) => {
        
         const handleSelect = async () => {
          item.checked = !item.checked;
         props.setId(item.packageId)
         props.setNewArray(x)
         props.setPaidMsg(item.packageDuration)
         props.setPackageType(item.packageType)
         setPaidPackageId(item.packageId);
         setPackageId(item.packageId)
          setSelectedPackage(!selectedPackage);
        };
        const handleSelect1 = async () => {
          item.checked = !item.checked;
          props.setId('')
          setPaidPackageId('');
          props.setPackageType('')
         setPackageId('')
          setSelectedPackage('');
        };
          return item?.packageDuration === "1 Month" ? (
          
             <Box sx={{alignItems:"center", marginLeft:"auto" , marginRight:"auto"}}>
              <Card
                sx={{
                  minWidth: 170,
                  backgroundColor:  item.packageId==packageId ? "#14613D" : 'rgb(241, 241, 241)',
                  opacity:0.9,
                  color: item.packageId==packageId ? "white" : "black",
                  margin:1,
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius:4,
                  width: { xs: 235, sm: 320, md: 280, lg: 250 },
                height: { xs: 210, sm: 230, md: 220, lg: 210 },
                }}
              >
                <CardContent>
                  <Typography variant="h5">{item.packageDuration}</Typography>
                  <Typography sx={{ fontSize: 17 }}>
                    {" "+ item.packageType}
                  </Typography>
                  <Typography sx={{ fontSize: 17 }}>
                    {" "}
                    Tender Messages
                    {" "+ item.monthlySmsLimit}
                  </Typography>
                  <Typography sx={{ fontSize: 17 }}>
                    {" "}
                    Package for {" "+ item.smsMedium}
                  </Typography>
                  <Typography sx={{ fontSize: 17 }}>
                    Charges 
                     {" "+ item.packageCost} /Rs.
                  </Typography>
                </CardContent>
             
                {paidPackageId==item.packageId  ?  
                 <Button onClick={handleSelect1}
                sx={{
                  "&:hover": {
                    backgroundColor: item.packageId==packageId ? "rgb(255, 215, 0)" : "#14613D",
                    color:  item.packageId==packageId? "black" : "white",
                    boxShadow: "none",
                  },
                 
                    backgroundColor: item.packageId==packageId ? "rgb(255, 215, 0)" : "#14613D",
                    color:  item.packageId==packageId? "black" : "white",
                    boxShadow: "none",
                }}
              >
              Undo
              </Button>  : 
                <Button
                sx={{
                  backgroundColor:"#14613D",
                  color: "white",
                  "&:hover": {
                    backgroundColor: item.packageId==packageId ? "rgb(255, 215, 0)" : "#14613D",
                    color:  item.packageId==packageId? "black" : "white",
                    boxShadow: "none",
                  },
                }}
                onClick={handleSelect}
              >
              Select
              </Button> }
              </Card>
              </Box>
          ) : null
        })}
    </Box>
  );
};

export default FirstMonth;
