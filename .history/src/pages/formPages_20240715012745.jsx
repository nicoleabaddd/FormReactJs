import { Box } from "@mui/material";
import React from "react";
import Forms from "../components/formulario";

const FormPages = () => {
  return (
    <Box sx={{background: "#F9F3EE"}}>
      <Box sx={{ marginTop: "120px", justifyContent: "center" }}>   
        <Forms />
      </Box>
    </Box>
  );
};

export default FormPages;
