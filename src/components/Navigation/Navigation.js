import React from 'react';
import './style.css';
import { Link } from "gatsby";

import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import BrushIcon from '@material-ui/icons/Brush';

function Navigation() {
  return (
    <nav className="nav">
      <Link to="/"><div className="nav__elem">
        <HomeIcon className="icon-color" />
      </div></Link>
      <Link to="/writerPage/"><div className="nav__elem">
        <FaceIcon className="icon-color" />
      </div></Link>
      <Link to="/team-page/"><div className="nav__elem">
        <PeopleIcon className="icon-color" />
      </div></Link>
      <Link to="/worklog/"><div className="nav__elem">
        <WorkIcon className="icon-color" />
      </div></Link>
      <Link to="/styleGuide/"><div className="nav__elem">
        <BrushIcon className="icon-color" />
      </div></Link>
    </nav>
  );
}

export default Navigation
