import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from "prop-types";

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  return (
      <FormControlLabel
      className='worklog-secondary-checkbox'
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
