import { Box } from "@mui/material";
import React from "react";

const Forms = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: ""
    });
  
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
      </Box>
    );
  };

export default Forms;