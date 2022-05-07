import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';

import {Typography} from '@mui/material'


const steps = [
  '目標を設定',
  '一品目を選ぶ',
  '二品目を選ぶ',
];

const icons = [
  <RocketLaunchTwoToneIcon color="secondary" />,
  <SetMealTwoToneIcon color="secondary" />,
  <CelebrationTwoToneIcon color="secondary" />
]

export default function MyStepper() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={4} alternativeLabel sx={{width: '100%'}}>
        {steps.map((label, i) => (
          <Step key={label}>
            <StepLabel icon={icons[i]}><Typography fontSize={12}>{label}</Typography></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
