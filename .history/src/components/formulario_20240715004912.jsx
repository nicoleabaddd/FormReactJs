import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    Select,
    InputLabel,
    FormControl
  } from "@mui/material";
  
  const cities = [
    { name: "Quito", value: "Quito" },
    { name: "Guayaquil", value: "Guayaquil" },
    { name: "Cuenca", value: "Cuenca" },
    { name: "Santo Domingo", value: "Santo Domingo" },
    { name: "Machala", value: "Machala" },
    { name: "Durán", value: "Durán" },
    { name: "Manta", value: "Manta" },
    { name: "Portoviejo", value: "Portoviejo" },
    { name: "Ambato", value: "Ambato" },
    { name: "Riobamba", value: "Riobamba" }
  ];
  
  const Forms = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      city: ""
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
        <FormControl fullWidth>
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            name="city"
            value={formData.city}
            onChange={handleChange}
            label="City"
            fullWidth
            required
          >
            {cities.map((city, index) => (
              <MenuItem key={index} value={city.value}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
  
        <Dialog open={open} onClose={handleClose}>
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