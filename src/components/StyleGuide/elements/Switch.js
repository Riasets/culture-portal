import React from 'react';
import Switch from '@material-ui/core/Switch';
import { orange } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';

const OrangeSwitch = withStyles({
  switchBase: {
    color: orange[300],
    '&$checked': {
      color: orange[500],
    },
    '&$checked + $track': {
      backgroundColor: orange[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <FormControlLabel
        control={
          <OrangeSwitch
            checked={state.checkedQ}
            onChange={handleChange('checkedQ')}
            value="checkedQ"
          />
        }
        label="Custom color"
      />
      <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch disabled value="checkedD" inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Switch disabled checked value="checkedE" inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch
        defaultChecked
        value="checkedF"
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
  );
}
