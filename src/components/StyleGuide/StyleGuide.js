import React from 'react';
import './style.css';

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

function StyleGuide() {
  return (
    <div className="style-guide-wrapper">
      <h2>Style Guide Page!</h2>
      <div>
        <h3>Main colors:</h3>
        <div className="main-colors">
          <div className="orange"></div>
          <div className="red"></div>
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
        <div className="icon-container">
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
        </div>
        <h3>Table:</h3>
        <SimpleTable />
      </div>
    </div>
  );
}

export default StyleGuide
