import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import {Box,Grid} from '@mui/material';

const useStyles = makeStyles({
    border: {
        boxShadow: '0px 0px 2px grey',
    },
    fonts: {
        fontSize: '14px'
    },
  });

function Boxres() {
    const classes = useStyles();

    const [fill, setFill] = useState({
        border: {
            'box-shadow': '0px 0px 2px grey',
            'position': 'relative',
            'top': '0px',
            'left': '200px',
            'z-index': '2',
            'transition':'all 1s',
        }
    })

    return (
        <>
            <Box m = {2} p = {1} width = {500} className = {classes.border}>
                <Grid container>
                    <Grid item xs = {6}>
                        <Box p = {1} color = "rgb(48, 48, 46)" >Property Address</Box>
                    </Grid>
                    <Grid item xs = {6}>
                        <Box p = {1} color = "rgb(48, 48, 46)" >First Party</Box>
                    </Grid>
                    <Grid item xs = {6}>
                        <Box className = {classes.fonts} pl = {1} color = "rgb(100,96,96)" py = {0.2}>House No. B-92 Jeevan Park</Box>
                    </Grid>
                    <Grid item xs = {6}>
                        <Box className = {classes.fonts} pl = {1} color = "rgb(100,96,96)" py = {0.2}>Ashish Garg|Anshul Garg</Box>
                    </Grid>
                </Grid>

                <Grid container mt = {1}>
                    <Grid item xs = {6}>
                        <Box p = {1} color = "rgb(48, 48, 46)" >Second Party</Box>
                    </Grid>
                    <Grid item xs = {6}>
                        <Box p = {1} color = "rgb(48, 48, 46)" >Locality</Box>
                    </Grid>
                    <Grid item xs = {6}>
                        <Box className = {classes.fonts} pl = {1} color = "rgb(100,96,96)" py = {0.2}>Hari Om Garg</Box>
                    </Grid>
                    <Grid item xs = {6}>
                        <Box className = {classes.fonts} pl = {1} color = "rgb(100,96,96)" py = {0.2}>Jeevan Park</Box>
                    </Grid>
                </Grid>

                <Grid container mt = {1}>
                    <Grid item xs = {6}>
                        <Box p = {1} color = "rgb(48, 48, 46)" >SRO Name</Box>
                    </Grid>
                    <Grid item xs = {6}>
                        <Box p = {1} color = "rgb(48, 48, 46)" >Deed Sub-Type</Box>
                    </Grid>
                    <Grid item xs = {6}>
                        <Box className = {classes.fonts} pl = {1} color = "rgb(100,96,96)" py = {0.2}>West-Janakpuri (SR IIB)</Box>
                    </Grid>
                    <Grid item xs = {6}>
                        <Box className = {classes.fonts} pl = {1} color = "rgb(100,96,96)" py = {0.2}>Relquishment Deed</Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Boxres;
