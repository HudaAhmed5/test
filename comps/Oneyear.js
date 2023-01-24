import * as React from "react";
import { Card, Grid, Typography,Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
const Oneyear = (props) => {
  const [paidPackageId, setPaidPackageId] = React.useState("");
  const [selectedPackage, setSelectedPackage] = React.useState("");
  const [packageId, setPackageId] = React.useState("");
  return (
    <Box sx={{display:"flex", flexWrap:"wrap"}}>
      {props.newArray?.map((data) => {
         const handleSelect = async () => {
          data.checked = !data.checked;
        //  console.log("pId", data.packageId)
         props.setId(data.packageId)
         setPackageId(data.packageId)
          setPaidPackageId(data.packageId);
          setSelectedPackage(!selectedPackage);
         }
         const handleSelect1 = async () => {
          data.checked = !data.checked;
        //  console.log("pId", data.packageId)
         setPackageId('')
        props.setId('')
          setPaidPackageId('');
          setSelectedPackage('');
        };
        return data.packageDuration === "1 Year" ? (
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
                borderRadius: 4,
                textAlign: "center",
                width: { xs: 265, sm: 290, md: 280, lg: 270 },
                height: { xs: 230, sm: 230, md: 220, lg: 230 },
              }}
            >
              <CardContent>
                <Typography variant="h5">{data.packageDuration}</Typography>
                <Typography sx={{ fontSize: 17 }}>
                  {data.packageType}
                </Typography>
                <Typography sx={{ fontSize: 17 }}>
                  Tender Messages
                  {" " + data.monthlySmsLimit}
                </Typography>
                <Typography sx={{ fontSize: 17 }}>
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
                  backgroundColor: "#14613D",
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
        ) : null;
      })}
    </Box>
  );
};

export default Oneyear;
