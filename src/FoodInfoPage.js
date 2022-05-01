import {useNavigate, useLocation} from 'react-router-dom'
import {Box, Typography, Stack, Fab} from '@mui/material'
import DirectionStack from './DirectionStack'
import MyPieChart from './MyPieChart'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


export default function FoodInfoPage(props){
  const navigate = useNavigate()
  const location = useLocation()

  // const {food1, foods2} = location.state

  const {food1, foods2} = props;


  const handleClick = (i) => {
    navigate('/second', {state: {food1: food1, foods2: foods2}})
  }
  return (
    <Box sx={{width: '100%', boxSizing: 'border-box'}}>
      <Stack alignItems='center'>
        <LocalFireDepartmentIcon sx={{fontSize: 50, mt: 10}}/>
        <Typography sx={{mt: 1}}>{food1[0]}</Typography>
        <MyPieChart food={food1}/>
        <DirectionStack food={food1}/>
      </Stack>
      <Box sx={{width: '100%', textAlign: 'center', position: 'fixed', bottom: 20}}>
        <Fab color='secondary' variant='extended' onClick={handleClick} sx={{width: '80%'}}>
          <Typography sx={{color: 'white'}}>次へ</Typography>
        </Fab>
      </Box>

    </Box>
  );
}
