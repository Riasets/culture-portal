import React from 'react';
import { Link } from "gatsby"
import './style.css';

import CustomButton from './elements/CustomButton';
import CustomButtonGroup from './elements/ButtonGroup';

function StyleGuide() {
  return (
    <div className="style-guide-wrapper">
      <h2>Style Guide Page!</h2>
      <div>
        <h3>Button:</h3>
        <CustomButton>Hello!</CustomButton>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  );
}

export default StyleGuide
