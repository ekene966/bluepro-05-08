import React, { Component } from 'react'
import { Container, Link, LinearProgress, Typography } from '@material-ui/core';
import makeComponentFromTheme from '../../theme'
import CardGridBlackBusiness from './cardGridBlackBusiness';
import '../../index.css'
import marked from 'marked'

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {  Avatar }  from '@material-ui/core'
import banner from '../../image/banner.png'
import icons from '../../image/icons.png'
import ecomme from '../../image/ecomme.png'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



export class Uplift extends Component {
  constructor(){
    super()
    this.state={
      longitude:0,
      latitude:0,
      accuracy:0,
      city:"",
      blackBusinesses:[]
    }

  }

  searchYelp(query="Black-owned"){
    const myHeaders = new Headers();
    const url="https://api.yelp.com/v3/businesses/search?term="
    const proxyurl="https://cors-anywhere.herokuapp.com/"
    myHeaders.append("Authorization", "Bearer "+ process.env.REACT_APP_YELP_BEARER_TOKEN,
    );
    
    const  requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    //const finalurl=(this.state.latitude)?proxyurl+url+query+"&latitude="+this.state.latitude+"&longitude="+this.state.longitude : proxyurl+url+query
    const finalurl=(this.state.city)?proxyurl+url+query+"&location="+this.state.city : proxyurl+url+query
    fetch(finalurl, requestOptions)
    .then(response => {
      if(response.ok) { return response.json()}
      else{ console.log("Yelp reqeust failed")}
      })
    .then(data =>  this.setState({blackBusinesses:data["businesses"]})  )
    .catch(error => console.log('error:', error));
  }
  
  
componentDidMount(){

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  
  
  navigator.geolocation.getCurrentPosition(
    (pos)=>{
        const crd=pos.coords
        
        this.setState({longitude:crd.longitude,latitude:crd.latitude,accuracy:crd.accuracy})
        const mapsurl="https://maps.googleapis.com/maps/api/geocode/json?key="+process.env.REACT_APP_GOOGLE_MAPS_API_KEY+"&latlng="+this.state.latitude.toString()+","+this.state.longitude.toString()
        fetch(mapsurl).then((response)=> response.json()).then((data)=>{
           const localcity=data.results[2].address_components[1]["long_name"]
           this.setState({city:localcity})
           this.searchYelp();
        })
      }
    
    , (err)=>{  
        //If there is a problem with the geolocaction just use a random city
        const cities=["New York","Miami","San Diego","Atlanta","Seattle","Chicago","Dallas","San Jose"]
        const ranNumber=Math.floor(Math.random() * cities.length)
        this.setState({city:cities[ranNumber]})
        this.searchYelp();

      
  }, options);

}

  render() {
    const BLMLoader = makeComponentFromTheme(<LinearProgress color="secondary" style={{marginTop: 20, marginBottom: 20}} />)
    return (
    
      <div  className="backgroundcl">
        {/* <Typography variant="h4" className= "feedTitle" style={{textAlign: 'center', marginTop: 40, marginBottom: 20, fontWeight:'450'}}>Black owned businesses</Typography>
        {this.state.blackBusinesses && this.state.blackBusinesses.length > 0 ? 
          <CardGridBlackBusiness data={this.state.blackBusinesses} /> : <BLMLoader />
        } */}
      

     
      <div>
     
       <img src={banner}  style={{width: '100%', marginTop:'5%'}}/>
       {/* <img style={{width: '100%' , marginTop:"8%"}} src=".."></img> */}



      </div>
       <div>
       <div  style={{marginLeft:'2%', marginTop:'4%'}}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
       <div style={{marginLeft:'1%'}}>
       <Card className="hovereddd" style={{width: "22rem", height: '25rem'}}>
           <img className="imagesxm" src={ecomme}  style={{}}/>
   <CardContent>

          <h3>
          <i class="fa fa-address-card" aria-hidden="true"></i>
          <span style={{marginLeft:'10px', fontWeight:'600'}}>    WEEDcon west 2020</span>
          </h3>
          <h3 className="cardfonts" >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span style={{marginLeft:'15px'}}>  Online Event, CA</span> 
          </h3>
          < h3 className="cardfontsts">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span style={{marginLeft:'10px'}}>    Wednesday, Aug 26th </span>
          </h3>
     
        <div> 
        <img src={icons}  style={{}}/>

          {/* <i id="fontawersom" class="fa fa-share-alt" aria-hidden="true"></i> */}
          <i id="fontawersomsms" style={{float: "right"}} class="fa fa-shopping-cart" aria-hidden="true"></i>

          </div>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
        <Grid item xs={12} sm={3}>
        <div style={{marginLeft:'1%'}}>
       <Card className="hovereddd" style={{width: "22rem", height: '25rem'}}>
       <img className="imagesxm" src={ecomme}  style={{}}/>

       <CardContent>

          <h3>
          <i class="fa fa-address-card" aria-hidden="true"></i>
          <span style={{marginLeft:'10px', fontWeight:'600'}}>    WEEDcon west 2020</span>
          </h3>
          <h3 className="cardfonts" >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span style={{marginLeft:'15px'}}>  Online Event, CA</span> 
          </h3>
          < h3 className="cardfontsts">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span style={{marginLeft:'10px'}}>    Wednesday, Aug 26th </span>
          </h3>
     
        <div> 
        <img src={icons}  style={{}}/>
          <i id="fontawersomsms" style={{float: "right"}} class="fa fa-shopping-cart" aria-hidden="true"></i>

          </div>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
        <Grid item xs={12} sm={3}>
        <div style={{marginLeft:'1%'}}>
       <Card className="hovereddd" style={{width: "22rem", height: '25rem'}}>
       <img className="imagesxm" src={ecomme}  style={{}}/>

       <CardContent>

          <h3>
          <i class="fa fa-address-card" aria-hidden="true"></i>
          <span style={{marginLeft:'10px', fontWeight:'600'}}>    WEEDcon west 2020</span>
          </h3>
          <h3 className="cardfonts" >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span style={{marginLeft:'15px'}}>  Online Event, CA</span> 
          </h3>
          < h3 className="cardfontsts">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span style={{marginLeft:'10px'}}>    Wednesday, Aug 26th </span>
          </h3>
     
        <div> 
         <img src={icons}  style={{}}/>
          <i id="fontawersomsms" style={{float: "right"}} class="fa fa-shopping-cart" aria-hidden="true"></i>

          </div>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
        <Grid item xs={12} sm={3}>
        <div style={{marginLeft:'1%'}}>
       <Card className="hovereddd" style={{width: "22rem", height: '25rem'}}>
       <img className="imagesxm" src={ecomme}  />

       <CardContent>

          <h3>
          <i class="fa fa-address-card" aria-hidden="true"></i>
          <span style={{marginLeft:'10px', fontWeight:'600'}}>    WEEDcon west 2020</span>
          </h3>
          <h3 className="cardfonts" >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span style={{marginLeft:'15px'}}>  Online Event, CA</span> 
          </h3>
          < h3 className="cardfontsts">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span style={{marginLeft:'10px'}}>    Wednesday, Aug 26th </span>
          </h3>
     
        <div> 
        <img src={icons}  style={{}}/>
          <i id="fontawersomsms" style={{float: "right"}} class="fa fa-shopping-cart" aria-hidden="true"></i>

          </div>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
      </Grid>
    </div>

    <div>
       <div  style={{marginLeft:'2%', marginTop:'4%'}}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
       <div style={{marginLeft:'1%'}}>
       <Card className="hovereddd" style={{width: "22rem", height: '25rem'}}>
       <img className="imagesxm" src={ecomme}  />

       <CardContent>

          <h3>
          <i class="fa fa-address-card" aria-hidden="true"></i>
          <span style={{marginLeft:'10px', fontWeight:'600'}}>    WEEDcon west 2020</span>
          </h3>
          <h3 className="cardfonts" >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span style={{marginLeft:'15px'}}>  Online Event, CA</span> 
          </h3>
          < h3 className="cardfontsts">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span style={{marginLeft:'10px'}}>    Wednesday, Aug 26th </span>
          </h3>
     
        <div> 
        <img src={icons}  style={{}}/>
          {/* <i id="fontawersom" class="fa fa-share-alt" aria-hidden="true"></i> */}
          <i id="fontawersomsms" style={{float: "right"}} class="fa fa-shopping-cart" aria-hidden="true"></i>

          </div>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
        <Grid item xs={12} sm={3}>
        <div style={{marginLeft:'1%'}}>
       <Card className="hovereddd" style={{width: "22rem", height: '25rem'}}>
       <img className="imagesxm" src={ecomme}  />

       <CardContent>

          <h3>
          <i class="fa fa-address-card" aria-hidden="true"></i>
          <span style={{marginLeft:'10px', fontWeight:'600'}}>    WEEDcon west 2020</span>
          </h3>
          <h3 className="cardfonts" >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span style={{marginLeft:'15px'}}>  Online Event, CA</span> 
          </h3>
          < h3 className="cardfontsts">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span style={{marginLeft:'10px'}}>    Wednesday, Aug 26th </span>
          </h3>
     
        <div> 
        <img src={icons}  style={{}}/>
          <i id="fontawersomsms" style={{float: "right"}} class="fa fa-shopping-cart" aria-hidden="true"></i>

          </div>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
        <Grid item xs={12} sm={3}>
        <div style={{marginLeft:'1%'}}>
       <Card className="hovereddd" style={{width: "22rem", height: '25rem'}}>
       <img className="imagesxm" src={ecomme}  />

       <CardContent>

          <h3>
          <i class="fa fa-address-card" aria-hidden="true"></i>
          <span style={{marginLeft:'10px', fontWeight:'600'}}>    WEEDcon west 2020</span>
          </h3>
          <h3 className="cardfonts" >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span style={{marginLeft:'15px'}}>  Online Event, CA</span> 
          </h3>
          < h3 className="cardfontsts">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span style={{marginLeft:'10px'}}>    Wednesday, Aug 26th </span>
          </h3>
     
        <div> 
        <img src={icons}  style={{}}/>
          <i id="fontawersomsms" style={{float: "right"}} class="fa fa-shopping-cart" aria-hidden="true"></i>

          </div>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
        <Grid item xs={12} sm={3}>
        <div style={{marginLeft:'1%'}}>
       <Card className="hovereddd" style={{width: "22rem", height: '25rem'}}>
       <img className="imagesxm" src={ecomme}  />

       <CardContent>

          <h3>
          <i class="fa fa-address-card" aria-hidden="true"></i>
          <span style={{marginLeft:'10px', fontWeight:'600'}}>    WEEDcon west 2020</span>
          </h3>
          <h3 className="cardfonts" >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span style={{marginLeft:'15px'}}>  Online Event, CA</span> 
          </h3>
          < h3 className="cardfontsts">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        <span style={{marginLeft:'10px'}}>    Wednesday, Aug 26th </span>
          </h3>
     
        <div> 
        <img src={icons}  style={{}}/>
          <i id="fontawersomsms" style={{float: "right"}} class="fa fa-shopping-cart" aria-hidden="true"></i>

          </div>
        </CardContent>
        </Card>
         
       </div>
        </Grid>
      </Grid>
    </div>
    </div>
         

       <div >
       

         
         
         
         </div>

       </div>
      <div>
      <BottomNavigation
     
      showLabels
      style={{marginTop: '5%'}}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>

<Card>
    {/* <CardContent >
        <Typography  style={{marginLeft:'45%'}} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>
        <Typography style={{marginLeft:'45%'}} color="textSecondary">
          adjective
        </Typography>
        <Typography   variant="body2" component="p">
         optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all
         content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2020 by Refsnes Data. All Rights Reserved.
Powered  
          <br />
        
        </Typography>
      </CardContent> */}
      </Card>
        <Card>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
      <CardContent >
        <Typography  style={{marginLeft:'45%'}} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>
        <Typography style={{marginLeft:'45%'}} color="textSecondary">
          adjective
        </Typography>
        <Typography   variant="body2" component="p">
        optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all
        content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2020 by Refsnes Data. All Rights Reserved.
Powered  
          <br />
        
        </Typography>
      </CardContent>
    
      </Grid>
      <Grid item xs={12} sm={4}>
      <CardContent >
        <Typography  style={{marginLeft:'45%'}} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>
        <Typography style={{marginLeft:'45%'}} color="textSecondary">
          adjective
        </Typography>
        <Typography   variant="body2" component="p">
        optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all
        content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2020 by Refsnes Data. All Rights Reserved.
Powered   
          <br />
        
        </Typography>
      </CardContent>
      </Grid>
      <Grid item xs={12} sm={4}>
      <CardContent >
        <Typography  style={{marginLeft:'45%'}} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>
        <Typography style={{marginLeft:'45%'}} color="textSecondary">
          adjective
        </Typography>
        <Typography   variant="body2" component="p">
         optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all
        content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2020 by Refsnes Data. All Rights Reserved.
Powered   
          <br />
        
        </Typography>
      </CardContent>
      </Grid>
      </Grid>
      </Card>
      </div>



     
     
      {/* <div dangerouslySetInnerHTML={{__html: markdown}} /> */}
     

     
     
      </div>
  
      

    )
  }
}


export default Uplift


