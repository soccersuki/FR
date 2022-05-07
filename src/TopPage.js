import {pink, blue, indigo, purple, cyan, orange, lime, grey} from '@mui/material/colors'
import {Box, Stack, Typography, Button, Fab, Divider} from '@mui/material'

import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import MyStepper from './MyStepper'

export default function TopPage(props){
  const handleClick = () => {
    props.setShowTop(false);
  }
  return(
    <Box sx={{height: window.innerHeight}}>
      <Stack alignItems="center" sx={{height: '100%', width: '100%'}}>
        <LocalFireDepartmentTwoToneIcon sx={{fontSize: 200, mt: 20}} color="secondary"/>
        <Stack sx={{mt: 3, width: '100%'}} alignItems="center" spacing={1}>
          <Typography fontSize={20}><b>ようこそ、食トレへ</b></Typography>
          <Typography>あなたに最適なコンビニ食を提案します!</Typography>
          <Typography></Typography>
          <Box sx={{mt: 2, width: '100%'}}><MyStepper /></Box>
        </Stack>
        <Box sx={{width: '100%', textAlign: 'center', position: 'fixed', bottom: 20}}>
          <Fab color='secondary' variant='extended' onClick={props.handleClick} sx={{width: '80%'}}>
            <Typography sx={{color: 'white'}}>さっそく始める</Typography>
          </Fab>
        </Box>

      </Stack>
    </Box>
  )
}
