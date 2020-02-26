import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {elaray, aplefull, dexnkt, anastasiaKrbvsk, riasets} from './tableData';
import SimpleTable from './elements/Table';
import PrimaryCheckbox from './elements/PrimaryCheckbox';
import SecondaryCheckbox from './elements/SecondaryCheckbox';
import PropTypes from "prop-types";

const useStyles = makeStyles({
    worklogTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        marginTop: 180,
        marginBottom: 45,
    },
    tableWrappper: {
        width: '100%',
        ['@media only screen and (max-width: 750px)']: {
            width: '95%'
        },
        maxWidth: 700,
        margin: 'auto',
        marginTop: 45,
        '& p': {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            marginBottom: 5,
        },
    },
    worklogCheckboxes: {
        width: '95%',
        maxWidth: 320,
        margin: 'auto',
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
    },
    difficulties: {
        width: '95%',
        maxWidth: 500,
        margin: '0 auto',
        marginTop: 70,
        '& p': {
            fontSize: 20,
            color: 'white',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 'bold',
        }
    },
    difficultiesList: {
        marginLeft: 40,
        color: 'white',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    }
});

function WorkLog() {
    const classes = useStyles(); 
    return (
        <Fragment>
            <h1 className={classes.worklogTitle}>WorkLog page.</h1>
            <div className = {classes.tableWrappper}>
                <p>Egor</p>
                <SimpleTable rows={elaray}/>
            </div>
            <div className = {classes.tableWrappper}>
                <p>Artyom</p>
                <SimpleTable rows={aplefull}/>
            </div>
            <div className = {classes.tableWrappper}>
                <p>Nikita</p>
                <SimpleTable rows={dexnkt}/>
            </div>
            <div className = {classes.tableWrappper}>
                <p>Anastasia</p>
                <SimpleTable rows={anastasiaKrbvsk}/>
            </div>
            <div className = {classes.tableWrappper}>
                <p>Alexander</p>
                <SimpleTable rows={riasets}/>
            </div>
            <div className={classes.worklogCheckboxes}>
                <SecondaryCheckbox text={'Main page'}/>
                <PrimaryCheckbox text={'portal\'s description'}/>
                <PrimaryCheckbox text={'\'author of the day\' block'}/>
                <SecondaryCheckbox text={'Navigation'}/>
                <SecondaryCheckbox text={'Page with a list of authors'}/>
                <PrimaryCheckbox text={'Autors search'}/>
                <PrimaryCheckbox text={'7-12 authors'}/>
                <SecondaryCheckbox text={'Page of an author'}/>
                <PrimaryCheckbox text={'Author\'s name'}/>
                <PrimaryCheckbox text={'Years of life'}/>
                <PrimaryCheckbox text={'Her/his picture'}/>
                <PrimaryCheckbox text={'Timeline biography'}/>
                <PrimaryCheckbox text={'List of artist\'s works'}/>
                <PrimaryCheckbox text={'Photo gallery'}/>
                <PrimaryCheckbox text={'Youtube video'}/>
                <PrimaryCheckbox text={'Place of author\'s activity on a map'}/>
                <SecondaryCheckbox text={'Page with team members'}/>
                <PrimaryCheckbox text={'Avatars for each member'}/>
                <PrimaryCheckbox text={'Link to github'}/>
                <PrimaryCheckbox text={'Role in the team'}/>
                <SecondaryCheckbox text={'Page with worklog'}/>
                <PrimaryCheckbox text={'Table with hours and time'}/>
                <PrimaryCheckbox text={'Main 1-3 difficulties'}/>
                <PrimaryCheckbox text={'Self-evaluation with checkboxes'}/>
                <SecondaryCheckbox text={'Page with styleguide'}/>
                <PrimaryCheckbox text={'links/buttons/inputs'}/>
                <PrimaryCheckbox text={'typography elements'}/>
                <PrimaryCheckbox text={'colors and its purpose'}/>
                <PrimaryCheckbox text={'icons'}/>
                <SecondaryCheckbox text={'Deployment'}/>
                <SecondaryCheckbox text={'Different languages'}/>
            </div>
            <div className={classes.difficulties}>
                <p>Main difficulties:</p>
                <ul className={classes.difficultiesList}>
                    <li>Splitting the task</li>
                    <li>Understanding what each person should do</li>
                </ul>
            </div>
        </Fragment>
    );
}

WorkLog.propTypes = {
    rows: PropTypes.array,
  }
  
WorkLog.defaultProps = {
  rows: [],
}

export default WorkLog