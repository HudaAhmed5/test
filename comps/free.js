import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
const Free = (props) => {
  const [freeApiData, setFreeApiData] = React.useState("");
  const [packageId, setPackageId] = React.useState("");
  const [selectedPackage, setSelectedPackage] = React.useState("");
  const [freePackageId, setFreePackageId] = React.useState("");
  const [newArray, setNewArray] = React.useState([]);

  const freePackage = async () => {
    await getFreeApiData();
  };

  const getFreeApiData = async () => {
    await fetch("https://api.pakthaika.com/api/user/getFreePackage", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let newArr = [];
        setFreeApiData(data);
        data.packageList?.map((item, index) => {
          let x = {
            ...item,
            checked: false,
          };
          newArr.push(x);
        });
       
        setNewArray(newArr);
      });
  };

  
  React.useEffect(() => {
    freePackage();
  }, []);
  

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {newArray?.map((data, index) => {
      
        const handleSelect = async () => {
          data.checked = !data.checked;
         setPackageId(data.packageId)
        props.setId(data.packageId)
        props.setPackageType(data.packageType)
        props.setFreeMsg(data.packageDuration)
        // setSelectedPackage(!selectedPackage);
          // setFreePackageId(data.packageId); 
        };
        const handleSelect1 = async () => {
          data.checked = !data.checked;
         setPackageId('')
        props.setId('')
        props.setPackageType('')
          // setSelectedPackage('');
          // setFreePackageId('');
        };
    
        return (
          <Grid
            item
            sm={7}
            lg={6}
            md={7}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Card
              sx={{
                minWidth: 200,
                backgroundColor:  data.packageId==packageId ?  "#14613D" :'rgb(241, 241, 241)',
                opacity:0.9,
                color:  data.packageId==packageId ?  "white" : "black",
                width: 270,
                height: 210,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography variant="h5">{data.packageDuration}</Typography>
                <Typography variant="body1">{data.packageType}</Typography>
                <Typography sx={{ fontSize: 17 }}>
                  {" "}
                  Total Sms {data.totalSmsLimit}
                </Typography>
                <Typography sx={{ fontSize: 17 }}>
                  Package for {data.smsMedium}
                </Typography>
                <Typography sx={{ fontSize: 17 }}>
                  Charges {data.packageCost} /Rs
                </Typography>
              </CardContent>
              {packageId==data.packageId  ? 
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
                    backgroundColor: data.packageId==packageId ? "rgb(255, 215, 0)": "#14613D",
                    color:  data.packageId==packageId? "black" : "white",
                    boxShadow: "none",
                  },
                }}
                onClick={handleSelect}
              >
              Select
              </Button> }
            </Card>
            
          </Grid>
        );
      })
      }
    
    </Grid>
  );
};

export default Free;
