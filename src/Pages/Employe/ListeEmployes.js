import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { listeEmployes } from "../../api/api";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "../../css/ListeEmployes.css";
import { supprimee } from "../../api/api";
import { Button, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const columns = [
  { id: "Nom", label: "Nom", minWidth: 170 },
  { id: "Prenom", label: "Prenom", minWidth: 100 },
  { id: "Email", label: "Email", minWidth: 100 },
  { id: "Ntel", label: "Ntel" },
  { id: "adresse", label: "adresse" },
  { id: "sexe", label: "sexe" },
  { id: "datenaissance", label: "datenaissance" },
  { id: "daterecrutement", label: "daterecrutement" },
  { id: "Action", label: "Action" },

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
    width: "100%",
    marginTop: "50px",
  },
  container: {
    maxHeight: 440,
  },
});

export default function ListeEmployes() {

  const history = useHistory()
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [employees, setEmployees] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  useEffect(() => {
    fetchEmployes();
  }, []);

  const fetchEmployes = async () => {
    const res = await listeEmployes();
    console.log("les employes sont::: ", res);
    setEmployees(res);
    setFetchComplete(true)
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeleteEmploye = (id) => {
    console.log("je vais supprimer cet ligne", id);
    supprimee(id).then(() => {
      fetchEmployes();
    });
  };

  return (
    <Paper className={classes.root}>
      <Button variant="contained" color="primary" onClick={() => {history.push('/Employe/Ajouter')}}>
        Ajouter Employé
      </Button>
      {fetchComplete && employees &&
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
          <TableBody>
            {employees.length > 0 &&
              employees.map((emp) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={emp._id}>
                    <TableCell>{emp.nom}</TableCell>

                    <TableCell>{emp.prenom}</TableCell>

                    <TableCell>{emp.email}</TableCell>

                    <TableCell>{emp.Ntel}</TableCell>

                    <TableCell>{emp.adresse}</TableCell>

                    <TableCell>{emp.sexe}</TableCell>

                    <TableCell>{emp.datenaissance}</TableCell>

                    <TableCell>{emp.daterecrutement}</TableCell>

                    <TableCell>
                      <DeleteIcon
                        className="icone-delete"
                        onClick={() => DeleteEmploye(emp._id)}
                      />
                      <EditIcon />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
}
       {fetchComplete && employees.length < 1 && <div><p>Aucun employé, pour ajouter cliquez sur le bouton ajouter</p></div>}
    </Paper>
  );
}
