import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
<<<<<<< HEAD:src/Layout/WelcomeMain.js
import ListeEmployes from './ListeEmployes';
import AjouterEmployer from './AjouterEmployer';
import Promotion from './Promotion';
import Formation from './Formation';
import ModifierPersonnel from './ModifierPersonnel'
=======
import ListeEmployes from '../Pages/Employe/ListeEmployes';
import AjouterEmployer from '../Pages/Employe/AjouterEmployer';
import Promotion from '../Pages/Promotion/Promotion';
import Formation from '../Pages/Formation/Formation';
import Login from '../Pages/Login';
>>>>>>> front:src/Layout/MainLayout.js
const WelcomeMain = () => {
    const useStyles = makeStyles((theme) => ({}));
    const classes = useStyles();
    return (
        
        <main className={classes.content}>
          
            <Switch>
                
                <Route path="/ListeEmployes" component={ListeEmployes} />
<<<<<<< HEAD:src/Layout/WelcomeMain.js
                 <Route path="/AjouterEmployer" component={AjouterEmployer} />
=======



                 <Route path="/Employe/Ajouter" component={AjouterEmployer} /> 

                 
>>>>>>> front:src/Layout/MainLayout.js
                 <Route path="/Promotion" component={Promotion} />
                 <Route path="/Formation" component={Formation} />
                 <Route path="/ModifierPersonnel/:id" component={ModifierPersonnel}/>

                 <Route path="/Login" component={Login} />


            </Switch>


        </main>
       
    );
};

WelcomeMain.propTypes = {};

export default WelcomeMain;