import React, {useState,useEffect, useRef} from 'react';
import {Box,AppBar,Toolbar,IconButton,Typography,Grid,InputLabel,MenuItem,FormControl,Select,TextField} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import aurumm from './images/aurumm.png';
import Table from './Tab';
import { Calculate } from '@mui/icons-material';
import Resbars from './Resbars';
import AlertDialogSlide from './AlertDialogSlide';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
    navbar: {
        backgroundColor:'white',
        height: '70px',
    },
    container: {
        height: 'calc(100% - 70px)',
        display: 'flex'
    },
    grid1: {
        width: '20vw',
        backgroundColor:'white',
    },
    grid2: {
        width: '20vw',
        backgroundColor:'white'
    },
    grid3: {
        width: '60vw',
        transition:'all 1s',
        overflow:'auto'
    },
  });

function App3() {
    const classes = useStyles();
    const [grid1, setGrid1] = useState({
        'transform':'translateX(0px)',
        'transition':'all 1s'
    });

    const [grid2, setGrid2] = useState({
        'transform':'translateX(0px)',
        'transition':'all 1s'
    });

    const [grid3, setGrid3] = useState({
        'transform':'translateX(0px)',
        'transition':'all 1s'
    });

    const close = () => {
        setGrid1({
        'transform':'translateX(0vw)',
        'width':'0vw',
         'transition':'all 1s'
        });

        setGrid2({
            'transform':'translateX(0vw)',
            'width':'30vw',
             'transition':'all 1s'
        });

        setGrid3({
            'transform':'translateX(0vw)',
            'width':'100vw',
             'transition':'all 1s'
         });
    }

    const open = () => {
        setGrid1({
            'width':'20vw',
             'transition':'all 1s'
        });
    }
    // const ref = useRef(null);

    // useEffect(() => {
    //   alert(ref.current.offsetWidth);
    // }, []);
    return (
        <>
        <Box height = "100vh">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense"  className = {classes.navbar}>
          <IconButton edge="start" sx={{ mr: 2 }} onClick = {open}>
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" component="div">
            <img src = {aurumm} width = "350px" height = "65px" />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

   <Box className = {classes.container}>
        <Box className = {classes.grid1} style = {grid1}>
        <Box p = {1}  sx={{display:'flex', alignItems: 'center'}}>
            Search City & Database
                <Box
                    onClick = {close}
                    sx={{ 
                      bgcolor: 'primary.main',
                      cursor:'pointer',display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      borderRadius:'2px',
                      marginLeft:'50px'
                     }} 
                      width = {35}
                       height = {28}
                       color= 'white'>
                      <CloseIcon />
                    </Box>
        </Box>
        <FormControl variant="filled" sx={{minWidth: 255,marginLeft: '8px' }}>
        <InputLabel id="demo-simple-select-filled-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        //   value={age}
        //   onChange={handleChange}
          size = "small"
        >
          <MenuItem value={10}>Mumbai</MenuItem>
          <MenuItem value={20}>Pune</MenuItem>
          <MenuItem value={30}>Chennai</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{mt:0.5,minWidth: 255,marginLeft: '8px' }}>
        <InputLabel id="demo-simple-select-filled-label">Land Records</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          size = "small"
        >
          <MenuItem value={10}>Property Tax</MenuItem>
          <MenuItem value={20}>Deeds</MenuItem>
          <MenuItem value={30}>Land Records</MenuItem>
        </Select>
      </FormControl>
      <Box width = {300} m = 'auto' mt = {2} height = {200}>
            <Box>
                  <Typography color = "rgb(48, 48, 46)" pl = {1}>
                      Search Parameters
                  </Typography>
            </Box>
                <Box>
                    <TextField id="filled-basic" label="Address" variant="filled" size = "small" sx = {{minWidth: 255,marginLeft: '8px'}}  />
                </Box>
                <Box>
                    <TextField id="filled-basic" label="First Party" variant="filled" size = "small" sx = {{minWidth: 255, my:0.5,marginLeft: '8px'}} />
                </Box>
                <Box>
                    <TextField id="filled-basic" label="Locality" variant="filled" size = "small" sx = {{minWidth: 255, my:0.5,marginLeft: '8px'}} />
                </Box>
                <Box>
                    <TextField id="filled-basic" label="Second Party" variant="filled" size = "small" sx = {{minWidth: 255, my:0.5,marginLeft: '8px'}} />
                </Box>
            </Box>
            <Box sx={{display:'flex', alignItems: 'center',marginLeft: '8px' }} width = {300}  mt = {8} height = {40}>
                <AlertDialogSlide />
            </Box>
        </Box>
        <Box className = {classes.grid2} style = {grid2}>
           <Box p = {1}>
               Results
            </Box>
            <Box height = {485} sx = {{overflow: 'auto',display:'flex',flexDirection:'column',alignItems:'center'}}>
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
        </Box>
        <Box className = {classes.grid3} style = {grid3}>
           <Table />
        </Box>
    </Box>
</Box>      
        </>
    )
}

export default App3;
