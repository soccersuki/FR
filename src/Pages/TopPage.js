import {Box, Stack, Typography, Button, Fab, Stepper, Step, StepLabel} from '@mui/material'

import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';

export default function TopPage(props){
  return(
    <Box sx={{height: window.innerHeight}}>
      <Stack alignItems="center" sx={{height: '100%', width: '100%'}}>
        <LocalFireDepartmentTwoToneIcon sx={{fontSize: 200, mt: 15}} color="secondary"/>
        <Stack sx={{mt: 3, width: '100%'}} alignItems="center" spacing={1}>
          <Typography fontSize={20}><b>ようこそ、食トレへ</b></Typography>
          <Typography>あなたに最適なコンビニ食を提案します!</Typography>
        </Stack>
        <Box sx={{mt: 4, width: '100%'}}><MyStepper /></Box>
      </Stack>
      <Box sx={{width: '100%', textAlign: 'center', position: 'fixed', bottom: 20}}>
        <Fab color='secondary' variant='extended' onClick={props.handleClick} sx={{width: '80%'}}>
          <Typography sx={{color: 'white'}}>さっそく始める</Typography>
        </Fab>
      </Box>
    </Box>
  )
}

function MyStepper() {
  const steps = [
    {
      text: 'カロリーとPFCバランスを設定',
      icon: <RocketLaunchTwoToneIcon color="secondary" />,
    },
    {
      text: '一品目は好きな食べ物を選びます',
      icon: <SetMealTwoToneIcon color="secondary" />,
    },
    {
      text: '提案された二品目を選んで完成!',
      icon: <CelebrationTwoToneIcon color="secondary" />
    }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={4} alternativeLabel sx={{width: '100%'}}>
        {steps.map((step, i) => (
          <Step key={step.text}>
            <StepLabel icon={step.icon}><Typography fontSize={12}>{step.text}</Typography></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
