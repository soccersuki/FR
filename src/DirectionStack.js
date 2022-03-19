import Stack from '@mui/material/Stack';
import {Box, Typography} from '@mui/material'
import { grey } from '@mui/material/colors';

function Item(props){
  return(
    <Box>
    <Typography variant='caption' display="block"align='center' sx={{color: props.color}}>{props.text}</Typography>
    <Typography align='center'><b style={{fontSize: 30}}>120</b>g</Typography>
    <Typography align='center'>20%</Typography>
    </Box>
  )
}

export default function DirectionStack() {
  return (
    <Box sx={{width: '100%'}}>
      <Stack direction="row" spacing={2} justifyContent="space-around">
        <Item text='炭水化物' color='#FFBB28'/>
        <Item text='脂質' color='#00C49F'/>
        <Item text='タンパク質' color='#0088FE'/>
      </Stack>
    </Box>
  );
}
