import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ProgressMobileStepper(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      LinearProgressProps={{color: "secondary"}}
      color="secondary"
      variant="progress"
      steps={6}
      position="static"
      activeStep={props.activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button color="secondary"size="small" onClick={handleNext} disabled={props.activeStep === 5}>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button color="secondary"size="small" onClick={handleBack} disabled={props.activeStep === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
}
