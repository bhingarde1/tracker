



// src/ProductForm.js

import React from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { apiList } from '../../apiList';
import { API } from '../../network 1';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        image: '',
        Pid: ''
    });

    console.log(formData);
    const data=useNavigate("/updateProduct",({state:{data:formData.data}}))

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
         e.preventDefault();

        try {
            const url = apiList.addproduct
            console.log(url)
            const response = await API.post(url, {formData} )
            if(response){
              console.log(response.success)
              console.log("add a product success");
              
            }
      }
         catch (error) {
            console.error('Error:', error);
            console.log("not save in data");
            
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                  Add Product 
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            name="name"
                            fullWidth
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Price"
                            name="price"
                            type="number"
                            fullWidth
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Category"
                            name="category"
                            fullWidth
                            value={formData.category}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Image URL"
                            name="image"
                            fullWidth
                            value={formData.image}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="ID"
                            name="id"
                            fullWidth
                            value={formData.Pid}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default AddProduct ;
