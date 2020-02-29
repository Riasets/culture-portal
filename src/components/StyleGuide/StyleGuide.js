import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from '../Navigation/Navigation';

import CustomButton from './elements/CustomButton';
import CheckboxLabels from './elements/CustomCheckbox';
import RadioButtons from './elements/CustomRadioButtons';
import Switches from './elements/Switch';
import SimpleTable from './elements/Table';

import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import PeopleIcon from '@material-ui/icons/People';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import BrushIcon from '@material-ui/icons/Brush';

const useStyles = makeStyles({
  styleGuideWrapper: {
    color: 'white',
    zIndex: -99999,
    textAlign: 'center',
    '& h2': {
      margin: '50px 0px',
      marginTop: '75px',
      fontSize: '50px',
      ['@media only screen and (max-width: 351px)']: {
        marginTop: '140px',
      },
    },
    '& h3': {
      marginTop: '50px',
      fontSize: '30px',
      color: '#839496',
    },
  },
  mainColors: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& div': {
      width: '200px',
      height: '200px',
      margin: '10px',
    },
  },
  red: {
    backgroundColor: '#f50057',
    transition: 'ease-in-out .3s',
    '&:hover': {
      borderRadius: '12px',
      transition: 'ease-in-out .3s',
      cursor: 'pointer',
    }
  },
  orange: {
    backgroundColor: '#fb8c00',
    transition: 'ease-in-out .3s',
    '&:hover': {
      borderRadius: '12px',
      transition: 'ease-in-out .3s',
      cursor: 'pointer',
    }
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& p': {
      margin: 0,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    '& div': {
      margin: '10px',
    },
  }
});

function StyleGuide() {
  const classes = useStyles();
  return (
    <>
    <Navigation />
    <div className={classes.styleGuideWrapper}>
      <h2>Style Guide Page!</h2>
      <div>
        <h3>Main colors:</h3>
        <div className={classes.mainColors}>
          <div className={classes.orange}></div>
          <div className={classes.red}></div>
        </div>
        <h3>Button:</h3>
        <CustomButton text="Hello!" />
        <h3>Checkboxes:</h3>
        <CheckboxLabels />
        <h3>Radio buttons:</h3>
        <RadioButtons />
        <h3>Switches:</h3>
        <Switches />
        <h3>Icons:</h3>
        <div className={classes.iconContainer}>
          <div>
            <p>Home</p>
            <HomeIcon className="icon-color"/>
          </div>
          <div>
            <p>Author</p>
            <FaceIcon className="icon-color"/>
          </div>
          <div>
            <p>Team</p>
            <PeopleIcon className="icon-color"/>
          </div>
          <div>
            <p>GitHub</p>
            <GitHubIcon className="icon-color"/>
          </div>
          <div>
            <p>Worklog</p>
            <WorkIcon className="icon-color"/>
          </div>
          <div>
            <p>Styles</p>
            <BrushIcon className="icon-color"/>
          </div>
        </div>
        <h3>Table:</h3>
        <SimpleTable />
        <h3>Main fonts: Roboto, Georgia!</h3>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      </div>
    </div>
    </>
  );
}

export default StyleGuide
