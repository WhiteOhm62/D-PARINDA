import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'

const Postal = () => {
  return (
    <><div class>
    <Card sx={{ maxWidth: 3455 }}>
      <CardMedia
        component="img"
        alt="Background-image"
        height="300"
        image="./logo.jpg"
      />
      <CardContent>
            {/* <Typography gutterBottom variant="h3" component="div">
            D-PARINDA
            </Typography> */}
        <Typography variant="h6" color="blue">
          We're here 24*7 to Serve You.  
        </Typography>
        <Typography variant="h6" color="blue">
          Enter your area Pin code :   
        </Typography>
      </CardContent>
      
      <CardActions>
      <TextField id="standard-basic" label="Postal Code" variant="standard"/>
        <Button size="large">Search</Button>
        <Button size="large">Use Device location</Button>
      </CardActions>
    </Card>
  

    
    </div>
    </>
  )
}

export default Postal
