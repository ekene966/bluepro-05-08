import React, { useState, useEffect } from 'react'
import marked from 'marked'
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function About() {
  const [markdown, setMarkdown] = useState(0);

  useEffect(() => {
    const readmePath = require("../README.md");
    fetch(readmePath)
      .then(response => response.text())
      .then(text => setMarkdown(marked(text)))
      .catch(err => console.log(err))
    });
  return (
  
      <div>
      {/* <div>
        <img style={{width: '100%' , marginTop:"8%"}} src="img/banner.png"></img>
      </div>
       <div>
       <div >
      <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
       <div style={{marginLeft:'1%'}}>
       <Card style={{width: "22rem", height: '25rem'}}>
       <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"
          title="Contemplative Reptile"
        /> 
       <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            WEEDcon west 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of 
          </Typography>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
        <Grid item xs={12} sm={3}>
       <div>
       <Card style={{width: "22rem", height: '25rem'}}>
       <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"
          title="Contemplative Reptile"
        /> 
       <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            WEEDcon west 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of 
          </Typography>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
        <Grid item xs={12} sm={3}>
        <div>
        <Card style={{width: "22rem", height: '25rem'}}>
       <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"
          title="Contemplative Reptile"
        /> 
       <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            WEEDcon west 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of 
          </Typography>
        </CardContent>
        </Card>
         
        </div>
        </Grid>
        <Grid item xs={12} sm={3}>
        <div>
        <Card style={{width: "22rem", height: '25rem'}}>
       <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"
          title="Contemplative Reptile"
        /> 
       <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            WEEDcon west 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of 
          </Typography>
        </CardContent>
        </Card>
         
        </div>
        </Grid>
      </Grid>
    </div>

     <div style={{marginTop:'5%'}}>
       <Card style={{width: "22rem", height: '25rem'}}>
       <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"
          title="Contemplative Reptile"
        /> 
       <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            WEEDcon west 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of 
          </Typography>
        </CardContent>
        </Card>
        </div>
         

       <div >
       

         
         
         
         </div>

       </div>


      <h1>hello yes</h1> */}
     
      <div dangerouslySetInnerHTML={{__html: markdown}} />
     

      </div>
  
  )
}


export default About