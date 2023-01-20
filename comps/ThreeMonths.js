import * as React from "react";
import { Card, Grid, Typography, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import {useMediaQuery } from "@mui/material"
import Button from "@mui/material/Button";
const ThreeMonths = (props) => {
  const [paidPackageId, setPaidPackageId] = React.useState("");
  const [selectedPackage, setSelectedPackage] = React.useState("");
  const [packageId, setPackageId] = React.useState("");
  const medium= useMediaQuery('(max-width:1199px)')
  
  return (
    <Box sx={{display:"flex", flexWrap:"wrap"}}>
      {props.newArray?.map((data) => {
         const handleSelect = async () => {
          data.checked = !data.checked;
         props.setId(data.packageId)
         setPackageId(data.packageId)
          setPaidPackageId(data.packageId);
          setSelectedPackage(!selectedPackage);
         }
         const handleSelect1 = async () => {
          data.checked = !data.checked;
         setPackageId('')
        props.setId('')
          setPaidPackageId('');
          setSelectedPackage('');
        };
        
        return data?.packageDuration === "threeMonth" ? (
          <Box sx={{alignItems:"center", marginLeft:"auto" , marginRight:"auto"}}>
            <Card
              sx={{
                minWidth: 200,
                backgroundColor:  data.packageId==packageId ? "#14613D" : 'rgb(241, 241, 241)',
                opacity:0.9,
                color: data.packageId==packageId ? "white" : "black",
                margin:1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 2,
                borderRadius: 4,
                textAlign: "center",
                width: { xs: 235, sm: 320, md: 280, lg: 250 },
                height: { xs: 210, sm: 230, md: 220, lg: 210 },
              }}
            >
              <CardContent>
                <Typography variant="h5">{data.packageDuration}</Typography>
                <Typography sx={{ fontSize: 17 }}>
                  {data.packageType}
                </Typography>
                <Typography sx={{ fontSize: 17 }}>
                  {" "}
                  Tender Messages
                  {" " + data.monthlySmsLimit}
                </Typography>
                <Typography sx={{ fontSize: 17 }}>
                  {" "}
                  Package for
                  {" " + data.smsMedium}
                </Typography>
                <Typography sx={{ fontSize: 17 }}>
                  Charges
                  {" " + data.packageCost} /Rs.
                </Typography>
              </CardContent>
              {paidPackageId==data.packageId  ?  
                 <Button onClick={handleSelect1}
                sx={{
                  "&:hover": {
                    backgroundColor: data.packageId==packageId ? "rgb(255, 215, 0)" : "#14613D",
                    color:  data.packageId==packageId? "black" : "white",
                    boxShadow: "none",
                  },
                 
                    backgroundColor: data.packageId==packageId ? "rgb(255, 215, 0)" : "#14613D",
                    color:  data.packageId==packageId? "black" : "white",
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
                    backgroundColor: data.packageId==packageId ? "rgb(255, 215, 0)" : "#14613D",
                    color:  data.packageId==packageId? "black" : "white",
                    boxShadow: "none",
                  },
                }}
                onClick={handleSelect}
              >
              Select
              </Button> }
            </Card>
      
          </Box>
        )
        : null;
      })}
   </Box>
  );
};

export default ThreeMonths;
