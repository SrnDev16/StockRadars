import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const ListCompany = ({item}) => {
  const [detail, setDetail] = useState(false);

  const detailClick = () => setDetail(!detail);

  const formatNumber = (number) => {
    return number?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <>
      <Box sx={{mt:2}}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography variant="h6">{item.N_COMPANY_T}</Typography>
            <Typography variant="subtitle1">{item.N_COMPANY_E}</Typography>
          </Box>
          <div onClick={detailClick}>
            {detail ? <ArrowDropUpIcon /> : <ArrowDropDownCircleIcon />}
          </div>
        </Stack>
        <Box sx={{ display: detail ? "block" : "none" ,textAlign:"left" , p:2}}>
            <p><strong>รายละเอียดกิจการ</strong> : {item.N_BUSINESS_TYPE_T}</p>
            <p><strong>เว็ปไซต์</strong> : <a href={item.N_URL} target="_blank">{item.N_URL}</a></p>
            <p><strong>Market Cap</strong> : {formatNumber(item.marketcap)}</p>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default ListCompany;
