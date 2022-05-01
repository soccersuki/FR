import {useLocation} from 'react-router-dom'
import {Box, Typography, Stack, Fab} from '@mui/material'
import DirectionStack from './DirectionStack'
import MyPieChart from './MyPieChart'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


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
      <LocalFireDepartmentIcon sx={{fontSize: 50, mt: 10}}/>
      <Typography align='center' variant='h6'><b>{food1[0]}</b></Typography>
      <Typography align='center'>&</Typography>
      <Typography align='center' variant='h6'><b>{food2[0]}</b></Typography>

      <MyPieChart food={sum}/>
      <DirectionStack food={sum}/>
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
