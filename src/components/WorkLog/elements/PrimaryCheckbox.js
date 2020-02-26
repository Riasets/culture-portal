import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  worklogPrimaryCheckbox: {
    marginLeft: 20,
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
      className={classes.worklogPrimaryCheckbox}
        control={
          <Checkbox
            checked={state.checkedB}
            value="checkedB"
            color="primary"
          />
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
