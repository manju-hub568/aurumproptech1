import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  });

function Resbars(props) {
    const classes = useStyles();
    return (
        <>
            {/* <Box color = "rgb(100,96,96)" mt = {1}  width = {440} className = {classes.resltB}>{props.detail}</Box> */}
        <Button
         style = {{
             'background-color':'white',
             'width':'220px','color':'grey',
             'margin-left':'3px',
             'margin-top':'10px',
             'text-transform':'none',
             'font-size':'15px',
             'font-weight':'normal'
            }} 
         variant="contained">{props.detail}
         </Button> 
        </>
    )
}

export default Resbars;
