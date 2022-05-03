import {useNavigate, useLocation} from 'react-router-dom'
import {Box, Typography, Stack, Fab, IconButton, } from '@mui/material'
import DirectionStack from './DirectionStack'
import MyPieChart from './MyPieChart'


import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
        <IconButton sx={{position: 'fixed', left: 0}}>
          <KeyboardArrowDownIcon fontSize='large'/>
        </IconButton>
        <Typography sx={{mt: 1.5, width: '80%'}} align='center'fontSize={20}><b>{food1[0]}</b></Typography>
        <Box sx={{width: '30%', mt: 3}}><MyPieChart food={food1}/></Box>
        <Box sx={{mt: 4, width: '100%'}}><DirectionStack food={food1}/></Box>
      </Stack>
      <Box sx={{width: '100%', textAlign: 'center', position: 'fixed', bottom: 20}}>
        <Fab color='secondary' variant='extended' onClick={props.handleClick} sx={{width: '80%'}}>
          <Typography sx={{color: 'white'}}>次へ</Typography>
        </Fab>
      </Box>

    </Box>
  );
}
