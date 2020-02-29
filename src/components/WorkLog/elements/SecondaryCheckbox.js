import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  worklogSecondaryCheckbox: {
    marginTop: 20,
  }
});

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const classes = useStyles();
  return (
      <FormControlLabel
      className={classes.worklogSecondaryCheckbox}
        control={
          <Checkbox checked={state.checkedA} value="checkedA" />
        }
        label={props.text}
      />
  );
}

CheckboxLabels.propTypes = {
  text: PropTypes.string,
}

CheckboxLabels.defaultProps = {
  text: '',
}
