import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import ListeEmployes from './ListeEmployes';
import AjouterEmployer from './AjouterEmployer';
import Promotion from './Promotion';
import Formation from './Formation';
import ModifierPersonnel from './ModifierPersonnel'
const WelcomeMain = () => {
    const useStyles = makeStyles((theme) => ({}));
    const classes = useStyles();
    return (
        
        <main className={classes.content}>
          
            <Switch>
                
                <Route path="/ListeEmployes" component={ListeEmployes} />
                 <Route path="/AjouterEmployer" component={AjouterEmployer} />
                 <Route path="/Promotion" component={Promotion} />
                 <Route path="/Formation" component={Formation} />
                 <Route path="/ModifierPersonnel/:id" component={ModifierPersonnel}/>


            </Switch>


        </main>
       
    );
};

WelcomeMain.propTypes = {};

export default WelcomeMain;