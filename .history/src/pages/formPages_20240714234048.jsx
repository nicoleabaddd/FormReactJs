import { Box } from "@mui/material";
import React from "react";
import Forms from "../components/formulario";

const FormPages=()=> {
    return (
        <Box sx={{}}> 
        onSubmit={handleSubmit} 
        sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 2, 
            maxWidth: 400, 
            margin: 'auto', 
            padding: 2, 
            boxShadow: 3,  
            borderRadius: 2,
      }}
        <Forms/></Box> 
    )

}; 

export default FormPages;
