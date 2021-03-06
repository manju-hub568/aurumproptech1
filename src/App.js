import React, {useEffect, useState, useRef} from 'react';
import {Box,AppBar,Toolbar,IconButton,Typography,Grid,InputLabel,MenuItem,FormControl,Select,TextField} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import aurumm from './images/aurumm.png';
import { makeStyles } from '@mui/styles';
import Table from './Tab';
import Resbars from './Resbars';
import AlertDialogSlide from './AlertDialogSlide';
import StickyHeadTable from './Table2';

const useStyles = makeStyles({
    GridHeight: {
        height: 'calc(100vh - 70px)',
        overflow: 'auto'
    },
  });

function App() {
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
    // const ref = useRef(null);

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
                <img src = {aurumm} width = '300px' height = '60px' alt = 'Aurum' />
           </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid container>
    <Box
                sx = {{
                  width:'342px',
                  backgroundColor:'white',
                  position:'absolute',
                  top:'70px',
                  left:'0',
                  zIndex: '3',
                  height: 'calc(100vh - 72px)',
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
            <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center' }} width = {300} m = 'auto' mt = {8} height = {40}>
                <AlertDialogSlide />
            </Box>
            </Box>
        {/* 311 37 */}
        <Grid item lg = {4} sx = {{backgroundColor:'white', height:'calc(100vh - 70px)'}}>
        <Typography variant="label" width = {30}
         sx = {{
             display:'inline-block',
             paddingLeft:'7px',
             height: 'calc(100vh - 72px)',
             boxShadow: '0px 0px 3px grey'
             }}
             onClick = {Open}
             >
                <MenuIcon style = {{'margin-top':'5px'}} />
        </Typography>
         <Box
         width = {375}
         sx = {{
             position:'absolute',
             top:'72px',
             left:'38px',
             height:'calc(100vh - 75px)'
         }}>
             <Box pl = {1} pt = {0.5}>
                 Results
            </Box>
            <Box  height = "calc(100vh - 100px)" sx = {{overflow:'auto'}}>
            <Resbars detail = {"House No. B-92 Jeevan Park"} />
                <Resbars detail = {"House No. F-92 Jeevan Park"} />
                <Resbars detail = {"House No. A-92 Jeevan Park"} />
                <Resbars detail = {"House No. C-92 Jeevan Park"} />
                <Resbars detail = {"Road No. A-91-92 Jeevan Pa"} />
                <Resbars detail = {"House No. Rz-92-D-2 Jeevan"} />
                <Resbars detail = {"House No. A-92 Sudershan Park New Delhi"} />
                <Resbars detail = {"House No. Rz-A/92/2 Second Floor Jeevan Park"} />
                <Resbars detail = {"House No. Prop No Rz E-92 Plot No.92 Block E Jeevan Park"} />
                <Resbars detail = {"House No. A-92 Jeevan Park"} />
                <Resbars detail = {"House No. C-92 Jeevan Park"} />
                <Resbars detail = {"Road No. A-91-92 Jeevan Pa"} />
                <Resbars detail = {"House No. Rz-92-D-2 Jeevan"} />
            </Box>
        </Box>
        </Grid>
        <Grid item lg = {8} className = {classes.GridHeight}>
            <Table />
            {/* <StickyHeadTable /> */}
        </Grid>
    </Grid>
            </Box>
        </>
    )
}

export default App;
