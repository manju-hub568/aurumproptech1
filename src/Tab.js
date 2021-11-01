import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "grey",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 5,
  },
}));

function createData(name, calories, fat, carbs, protein, vita) {
  return { name, calories, fat, carbs, protein, vita };
}

const rows = [
  createData('House No. B-92 Jeevan Park', 'Ashish Garg|Anshul Garg','Hari Om Garg','Jeevan Park','West-Janakpuri (SR IIB)','Relquishment Deed'),
  createData('House No. F-92 Jeevan Park','Pinki|Hari Om Garg|Kamlesh Gupta','Neelu Babbar','Jeevan Park','West-Janakpuri (SR IIB)','Relquishment Deed'),
  createData('House No. A-92 Jeevan Park','Pinki|Anita Garg|Seema Garg','Subhash Chander','Jeevan Park','West-Janakpuri (SR IIB)','Relquishment Deed'),
  createData('House No. C-92 Jeevan Park','Anita Garg|Seema Garg','Hari Om Garg','Jeevan Park','West-Janakpuri (SR IIB)','Relquishment Deed')
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" m = {1} stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell >Property Address</StyledTableCell>
            <StyledTableCell align="left" >First Party</StyledTableCell>
            <StyledTableCell align="left">Second Party</StyledTableCell>
            <StyledTableCell align="left">Locality</StyledTableCell>
            <StyledTableCell align="left">SRO Name</StyledTableCell>
            <StyledTableCell align="left">Deed Sub-Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
              <StyledTableCell align="left">{row.vita}</StyledTableCell>
            </StyledTableRow>
          ))}
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
              <StyledTableCell align="left">{row.vita}</StyledTableCell>
            </StyledTableRow>
          ))}
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
              <StyledTableCell align="left">{row.vita}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
