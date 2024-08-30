import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { apiList } from '../../apiList';
import { API } from '../../network 1';
import { useLocation } from 'react-router-dom';

const UpdateProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        image: [],
        pid: '66cda09d94e2e9525afe80ed',
        id:"66cda09d94e2e9525afe80ed"
    });

    const location = useLocation()
    const titleData = location.state?.title

    console.log(formData);
      
    const getProductData = async()=>{
        try{
            const url = apiList.getproduct
            const response = await API.get(url , {id:'66cefd0fd3bf862b8b564e78'})
            if(response){
                // console.log(response.data)
                setFormData((prevState) => ({
                    ...prevState,
                    ...response.data.data // Assuming response.data.data contains the product data
                }));
            }
        }catch(error){
            console.error(error);
        }
    }

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
    useEffect(()=>{
        getProductData()
    },[])
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                  update Product 
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid  item xs={12}>
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
                            value={formData.id}
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
}

export default UpdateProduct