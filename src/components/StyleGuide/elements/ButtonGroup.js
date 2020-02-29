import React from 'react';
import CustomButton from './CustomButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CustomButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <CustomButton>One</CustomButton>
        <CustomButton>Two</CustomButton>
        <CustomButton>Three</CustomButton>
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <CustomButton>One</CustomButton>
        <CustomButton>Two</CustomButton>
        <CustomButton>Three</CustomButton>
      </ButtonGroup>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <CustomButton>One</CustomButton>
        <CustomButton>Two</CustomButton>
        <CustomButton>Three</CustomButton>
      </ButtonGroup>
    </div>
  );
}
