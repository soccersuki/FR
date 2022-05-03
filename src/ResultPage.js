import {useLocation} from 'react-router-dom'
import {Box, Typography, Stack, Fab} from '@mui/material'
import DirectionStack from './DirectionStack'
import MyPieChart from './MyPieChart'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBowlFood, faDrumstickBite, faBottleDroplet} from '@fortawesome/free-solid-svg-icons'
import {pink, blue, indigo, purple, cyan, orange, lime, grey} from '@mui/material/colors'


export default function ResultPage(){
  const location = useLocation()

  const {food1, food2} = location.state

  const sum = ['合計', null, null, food1[3] + food2[3], food1[4] + food2[4], food1[5] + food2[5], food1[6] + food2[6]]

  // const per1 = per(food1[3], food1[6], food1[4], food1[5])
  // const per2 = per(food2[3], food2[6], food2[4], food2[5])
  // const per3 = per(sum[3], sum[6], sum[4], sum[5])

  const handleClick = () => {}

  return(
    <Box sx={{width: '100%', boxSizing: 'border-box'}}>
    <Stack alignItems='center'>
      <CelebrationTwoToneIcon sx={{fontSize: 70, mt: 5}} color="secondary"/>
      <Stack sx={{mt: 3}} spacing={1} justifyContent="center">
        <Stack direction="row" alignItems="center" spacing={1}  justifyContent="center">
        <FontAwesomeIcon icon={faDrumstickBite} color={pink[200]} fontSize={20}/>
        <Typography align='center' fontSize={18}><b>{food1[0]}</b></Typography>
        </Stack>

        <Typography align='center'>&</Typography>
        <Stack direction="row" alignItems="center" spacing={1}  justifyContent="center">
        <FontAwesomeIcon icon={faBowlFood} color={pink[200]} fontSize={20}/>
        <Typography align='center' fontSize={18}><b>{food2[0]}</b></Typography>
        </Stack>

      </Stack>

      <Box sx={{width: '30%', mt: 3}}><MyPieChart food={sum}/></Box>
      <Box sx={{mt: 3}}><DirectionStack food={sum}/></Box>
    </Stack>
    <Box sx={{width: '100%', textAlign: 'center', position: 'fixed', bottom: 20}}>
      <Fab color='secondary' variant='extended' onClick={handleClick} sx={{width: '80%'}}>
        <Typography sx={{color: 'white'}}>次へ</Typography>
      </Fab>
    </Box>
    </Box>
  )
}

// function per(e, p, f, c){
//   return [Math.round(p * 4 / e * 100), Math.round(f * 9 / e * 100), Math.round(c * 4 / e * 100)]
// }
