import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlined from '@mui/icons-material/AddShoppingCartOutlined';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        www.dparinda.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,
    // 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36
];

const theme = createTheme();

export default function Shop() {
  return (<>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4"  fontWeight="600"  fontFamily="cursive" component="div"  sx={{ flexGrow: 1 }}>
            D-PARINDA
          </Typography>
          <Typography variant="h6"  alignItems="center"  sx={{ flexGrow: -5 }}>
               <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </Typography>
            
            <AddShoppingCartOutlined />
              
        </Toolbar>
      </AppBar>
    </Box>
      <main>
        {/* Hero unit */}
        
    <Card sx={{ maxWidth: 3455 }}>
        <CardMedia
        component="img"
        alt="Background-image"
        height="470"
        image="https://cdn.hswstatic.com/gif/web-advertising.jpg"
      />
      <CardContent>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: -10,
            pb: -10,
          }}
        >
          <Container maxWidth="sm">
            {/* <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              30% OFF
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Explore a wide range of shirts for Men.
            </Typography> */}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Explore more !!</Button>
              <Button variant="outlined">Browse by categories</Button>
            </Stack>
          </Container>
        </Box>
      </CardContent>
        </Card>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={4} sm={4} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '1%',
                    }}
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      NIKE Sports shoes
                    </Typography>
                    <Typography>
                    Dragon Edition 2023.
                    </Typography>
                    <Typography>__________________________  </Typography>
                    <Typography component="h2" variant="h5" color="text.primary">
                       Rs. 13,999.00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="meduim">Buy</Button>
                    <Button size="meduim" Color="blue">Add to Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Pagination count={100} style={{
          display: "flex",
          justifyContent: "center",
      }} color="primary"/>
        <Typography variant="h6" align="center" gutterBottom>
          _____________________________________________________________________________________________________________________
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          MOST SEARCHED FOR ON D-PARINDA: OPPO | A16KVivo |  Y33TOPPO | Reno7 | 5GOPPO | Reno7 Pro 5G | iPhone 13 |iPhone 13 Pro | iPhone 13 Pro Max |iPhone 13 mini |  Help Centre | Track Orders | Manage Orders |Return Orders | Gift Cards |  Axis Bank Credit | Pay Later |


        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    </>);
}