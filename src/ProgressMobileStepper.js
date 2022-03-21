import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ProgressMobileStepper(props) {
  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={props.activeStep}
      sx={{ ...props.sx, maxWidth: 400, width: '100%', p: 0 }}
      nextButton={
        <Button size="small">
        </Button>
      }
      backButton={
        <Button size="small" onClick={props.handleBack} disabled={props.activeStep === 0}>
          <KeyboardArrowLeft />
        </Button>
      }
    />
  );
}
