import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'none',
  },
})(Button);

export default function CustomButton({ text }) {
  return <StyledButton>{text}</StyledButton>;
}

CustomButton.propTypes = {
  text: PropTypes.string,
}

CustomButton.defaultProps = {
  text: ``,
}
