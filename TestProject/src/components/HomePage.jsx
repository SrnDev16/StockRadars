import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Container, Paper, TextField, Box, List } from "@mui/material";
import ListCompany from "./ListCompany";
import SearchIcon from '@mui/icons-material/Search';

const HomePage = () => {
  const [data, setData] = useState();
  const [word, setWord] = useState("");
  const [dataFilter] = useState(["N_COMPANY_T","N_COMPANY_E"]);

  useEffect(() => {
    axios
      .get("https://stockradars.co/assignment/data.php")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

 

  const searchFilter = (data) => {
    return data?.filter((item) => {
      return dataFilter.some((filter) => {
        if (item[filter]) {
          return (
            item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) >
            -1
          );
        }
      });
    });
  };

  return (
    <>
      <NavBar regisTitle={"register"}/>
      <Container maxWidth="lg" component={Paper} sx={{ p: 1 }}>
        <Box sx={{position:"sticky",top:"10px"}}>
          <TextField fullWidth label="ค้นหาบริษัท" id="fullWidth" onChange={(e)=> setWord(e.target.value)} sx={{bgcolor:"white"}}/>
        </Box>
        <Box sx={{ mt: 2 }}>
          {searchFilter(data)?.map((item,index) => {
            return <ListCompany key={index} item={item}/>
          })}
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
