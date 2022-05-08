import {useNavigate, useLocation} from 'react-router-dom'
import {Box, Typography, Stack, Fab, IconButton, } from '@mui/material'
import DirectionStack from './DirectionStack'
import MyPieChart from './MyPieChart'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FoodInfoPage(props){
  const {food1} = props;
  return (
    <Box sx={{width: '100%', boxSizing: 'border-box'}}>
      <Stack alignItems='center'>
        <IconButton sx={{position: 'fixed', left: 0}}>
          <KeyboardArrowDownIcon fontSize='large'/>
        </IconButton>
        <Typography sx={{mt: 1.5, width: '80%'}} align='center'fontSize={20}><b>{food1[0]}</b></Typography>
        <Box sx={{width: '30%', mt: 3}}><MyPieChart food={food1}/></Box>
        <Box sx={{mt: 4, width: '100%'}}><DirectionStack food={food1} goal={props.goal}/></Box>
        <Fab color='secondary' variant='extended' onClick={props.handleClick} sx={{width: '80%', mt: 6, mb: 3}}>
          <Typography sx={{color: 'white'}}>次へ</Typography>
        </Fab>
      </Stack>
    </Box>
  );
}
