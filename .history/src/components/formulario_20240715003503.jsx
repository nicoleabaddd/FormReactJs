import React, { useState } from "react";
import { TextField, Button, Box, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";


const Forms = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: ""
    });
    const [open, setOpen] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      setOpen(true);  // Abre el diálogo cuando el formulario se envía
    };
  
    const handleClose = () => {
      setOpen(false);  // Cierra el diálogo
    };
  
    return (
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          maxWidth: 400,
          margin: "auto",
          padding: 2,
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          My Material Form
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          type="email"
        />
        <TextField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
          type="password"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
  
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>{"Submission Successful"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your form has been submitted successfully!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  };
  

export default Forms;