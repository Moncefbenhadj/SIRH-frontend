import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {listeEmployes} from '../../api/api';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "../../css/ListeEmployes.css"
import { supprimee } from '../../api/api';
import Button from '@material-ui/icons/Edit';

const columns = [
  { id: 'Nom', label: 'Nom', minWidth: 170 },
  { id: 'Prenom', label: 'Prenom', minWidth: 100 },
  {id: 'Formation', label: 'Formation' },
  /*{
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },*/
];




const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '50px', 
     
  },
  container: {
    maxHeight: 440,
    
  },
});


        
export default function ListeEmployes() {

   
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [employees,setEmployees]= useState([]);
  
   useEffect(async()=>
   {
     const res=await listeEmployes();  
     setEmployees(res);
    },[]
   )
  

   
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          { <TableBody>
            {employees.map(emp => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={emp._id}>
                  
                   
                                          
                      <TableCell>
                        {emp.nom}
                      </TableCell>
                      
                      <TableCell>
                        {emp.prenom}
                      </TableCell>
                      
                      <TableCell>
                        
                                        
                      </TableCell>
                    
                
                </TableRow>
              );
            })}
          </TableBody> }
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" href="">
  LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
</Button>
    </Paper>
  
            
  );


}
