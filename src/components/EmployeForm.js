// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import {ajouter} from '../api';
// import Menu from '@material-ui/icons/Menu';
// import { List, MenuList } from '@material-ui/core';
// //import {BrowserRouter as Link} from 'react-router-dom';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         SIRH
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(2, 0, 2),
//   },
// }));

// const currencies = [
//   {
//     value: 'Homme',
//     label: 'Homme',
//   },
//   {
//     value: 'Femme',
//     label: 'Femme',
//   },
  
// ];

// export default function SignUp() {
//   const classes = useStyles();

//   const [nom,setNom] = React.useState('');
//   const [prenom,setPrenom] = React.useState('');
//   const [email,setEmail] = React.useState('');
//   const [Ntel,setNtel] = React.useState('');
//   const [adresse,setAdresse] = React.useState('');
//   const [sexe,setSexe] = React.useState('');
//   const [datenaissance,setDatenaissance] = React.useState('');
//   const [daterecrutement,setDaterecrutement] = React.useState('');
//   const [currency, setCurrency] = React.useState('');

//   const handleNomChange = (event)=>{ 
//     setNom(event.target.value)
//   }

//   const handlePrenomChange = (event)=>{
//     setPrenom(event.target.value)
//   }

//   const handleEmailChange = (event)=>{ 
//     setEmail(event.target.value)
//   }

//   const handleNtelChange = (event)=>{ 
//     setNtel(event.target.value)
//   }

//   const handleAdresseChange = (event)=>{ 
//     setAdresse(event.target.value)
//   }

//   const handleDatenaissanceChange = (event)=>{ 
//     setDatenaissance(event.target.value)
//   }

//   const handleDaterecrutementChange = (event)=>{ 
//     setDatenaissance(event.target.value)
//   }

//   const handleAjouter = (event) =>{
//     event.preventDefault();
//     ajouter(nom,prenom,email,Ntel,adresse,sexe,datenaissance,daterecrutement);
    
//   }

//   const handleSexeChange = (event) => {
//     setSexe(event.target.value);
//   };

//   const handleCChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Création d'un employé 
//         </Typography>
//         <form className={classes.form} noValidate onSubmit={handleAjouter}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="nom"
//                 variant="outlined"
//                 onChange={handleNomChange}
//                 required
//                 fullWidth
//                 id="nom"
//                 label="Nom"
//                 autoFocus
//               />
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handlePrenomChange}
//                 id="prenom"
//                 label="Prenom"
//                 name="prenom"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleEmailChange}
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
            

//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleNtelChange}
//                 name="number"
//                 label="Numéro de téléphone"
//                 type="text"
//                 id="Ntel"
//                 autoComplete="Number"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 //onChange={handleAdresseChange}
//                 name="adresse"
//                 label="Adresse"
//                 type="text"
//                 id="adresse"
                
                
//               />
//             </Grid>

//             <Grid>
//             <TextField
//           id="standard-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleSexeChange}
//           helperText="Choisissez votre sexe"
//         >
//           {currencies.map((option) => (
//             <MenuList key={option.value} value={option.value}>
//               {option.label}
//             </MenuList>
//           ))}
//         </TextField>
//         </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleDatenaissanceChange}
//                 name="Date de Naissance"
//                 label="Date de Naissance"
//                 type="Date"
//                 id="DatedeNaissance"
//                 autoComplete="current-DatedeNaissance"
                
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 onChange={handleDaterecrutementChange}
//                 name="Date de Recrutement"
//                 label="Date de Recrutement"
//                 type="Date"
//                 id="DatedeRecrutement"
//                 autoComplete="current-DatedeNaissance"
                
//               />
//             </Grid>
            
            
//           </Grid>
//           <Button
          
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
              
//               Ajouter un employé
//           </Button>
          
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }