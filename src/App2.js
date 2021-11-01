import React, {useState,useEffect, useRef} from 'react';
import Boxres from './Boxres';
import Aurum from './images/Aurum.png';
import { makeStyles } from '@mui/styles';
import {Box,AppBar,Toolbar,IconButton,Typography,Grid,InputLabel,MenuItem,FormControl,Select,TextField} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AlertDialogSlide from './AlertDialogSlide';
import CloseIcon from '@mui/icons-material/Close';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Resbars from './Resbars';
import Table from './Tab';

const useStyles = makeStyles({
    GridHeight: {
        height: 'calc(100vh - 70px)',
        overflow: 'auto'
    },
    resltB: {
        border: '1px solid rgb(226, 226, 220)',
        backgroundColor: 'white',
        padding: '8px',
        borderRadius: '3px',
    },
  });

function App2() {
    const classes = useStyles();
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [close, setClose] = useState({
        'background-color':'white',
        'transform':'translateX(-342px)',
        'transition':'all 1s',
        'background-color':'white',
      });

      const Close = () => {
        setClose({
          'transform':'translateX(-342px)',
          'transition':'all 1s',
          'background-color':'white'
        });
      }

      const Open = () => {
        setClose({
          'transform':'translateX(0px)',
          'transition':'all 1s',
          'background-color':'white'
        });
      }

    const ref = useRef(null);

    // useEffect(() => {
    //   alert(ref.current.offsetWidth);
    // }, []);
    return (
        <>
            <Box height="100vh">
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar variant="dense" style = {{'height':'70px','background-color':'white','box-shadow':'1px 1px 4px grey'}}>
          <Typography variant="h6" color="inherit" component="div">
            <Box width = {200} height = {60}>
                <img src = {Aurum} width = '200px' height = '60px' alt = 'Aurum' />
           </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid container className = {classes.GridHeight}>
        <Box 
                sx = {{
                  width:'342px',
                  backgroundColor:'white',
                  position:'absolute',
                  top:'70px',
                  left:'0',
                  zIndex: '3',
                  height: 'calc(100vh - 70px)',
                }}
                style = {close}
        >
        <Box width = {300} m = 'auto' mt = {2} height = {135}>
                <Box borderRadius = {2}
                 sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                   <Typography color = "rgb(48, 48, 46)">
                      Search City & Database
                    </Typography>
                    <Box
                      onClick = {Close}
                    sx={{ 
                      bgcolor: 'primary.main',
                      cursor:'pointer',display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      borderRadius:'2px'
                     }} 
                      width = {35}
                       height = {28}
                       color= 'white'>
                      <CloseIcon />
                    </Box>
                </Box>
        <Box py = {1}>
        <FormControl variant="filled" sx={{minWidth: 300 }}>
        <InputLabel id="demo-simple-select-filled-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          size = "small"
        >
          <MenuItem value={10}>Mumbai</MenuItem>
          <MenuItem value={20}>Pune</MenuItem>
          <MenuItem value={30}>Chennai</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{mt:0.5,minWidth: 300 }}>
        <InputLabel id="demo-simple-select-filled-label">Land Records</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          size = "small"
        >
          <MenuItem value={10}>Property Tax</MenuItem>
          <MenuItem value={20}>Deeds</MenuItem>
          <MenuItem value={30}>Land Records</MenuItem>
        </Select>
      </FormControl>
      </Box>
            </Box>
            <Box width = {300} m = 'auto' mt = {2} height = {200}>
            <Box>
                  <Typography color = "rgb(48, 48, 46)">
                      Search Parameters
                  </Typography>
            </Box>
                <Box>
                    <TextField id="filled-basic" label="Address" variant="filled" size = "small" sx = {{minWidth: 300, my:0.5}} />
                </Box>
                <Box>
                    <TextField id="filled-basic" label="First Party" variant="filled" size = "small" sx = {{minWidth: 300, my:0.5}} />
                </Box>
                <Box>
                    <TextField id="filled-basic" label="Locality" variant="filled" size = "small" sx = {{minWidth: 300, my:0.5}} />
                </Box>
                <Box>
                    <TextField id="filled-basic" label="Second Party" variant="filled" size = "small" sx = {{minWidth: 300, my:0.5}} />
                </Box>
            </Box>
            <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center' }} width = {300} m = 'auto' mt = {12} height = {40}>
                <AlertDialogSlide />
            </Box>
            </Box>
        <Grid item xs={12}>
        <Grid container className = {classes.GridHeight}>
        <Grid item xs={5} style = {{'background-color':'rgb(226, 226, 220)'}}>
            <Box sx = {{display:'flex',alignItems:'center'}}>
              <Box pl = {1.8}
               sx = {{position:'absolute',top:'71px',left:'0',
                      zIndex:'2',height: 'calc(100vh - 73px)',
                      backgroundColor:'white',
                      opacity:'0.8'
                      }}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick = {Open}>
                    <MenuIcon />
                </IconButton>
              </Box>
                  <Typography color = "rgb(48, 48, 46)" ml = {7.4} mt = {1}>
                      Results
                    </Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', flexDirection: 'column'}} height = "75vh">
                <Resbars detail = {"House No. B-92 Jeevan Park"} />
                <Resbars detail = {"House No. F-92 Jeevan Park"} />
                <Resbars detail = {"House No. A-92 Jeevan Park"} />
                <Resbars detail = {"House No. C-92 Jeevan Park"} />
                <Resbars detail = {"Road No. A-91-92 Jeevan Pa"} />
                <Resbars detail = {"House No. Rz-92-D-2 Jeevan"} />
                <Resbars detail = {"House No. A-92 Sudershan Park New Delhi"} />
                <Resbars detail = {"House No. Rz-A/92/2 Second Floor Jeevan Park"} />
                <Resbars detail = {"House No. Prop No Rz E-92 Plot No.92 Block E Jeevan Park"} />
            </Box>
        </Grid>
        <Grid
         item xs={7} className = {classes.GridHeight}
          sx = {{backgroundColor:'white',display:'flex',alignItems:'center',flexDirection:'column'}}
          >
                {/* <Boxres /> */}
                <Table />
        </Grid>
        </Grid>
        </Grid>
    </Grid>
        </Box>
        </>
    )
}

export default App2;
