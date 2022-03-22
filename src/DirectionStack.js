import Stack from '@mui/material/Stack';
import {Box, Typography} from '@mui/material'
// import { grey } from '@mui/material/colors';


export default function DirectionStack(props) {
  const pfc = [
    {name: 'たんぱく質', g: props.food[6], color: '#FFBB28'},
    {name: '脂質', g: props.food[4], color: '#00C49F'},
    {name: '炭水化物', g: props.food[5], color: '#0088FE'},
  ]
  return (
    <Box sx={{width: '100%'}}>
      <Stack direction="row" spacing={2} justifyContent="space-around">
        {pfc.map((nut, id) => {
          return(
            <Box>
            <Typography display="block"align='center' sx={{color: nut.color, fontSize:10}}>{nut.name}</Typography>
            <Typography align='center'><b style={{fontSize: 20}}>{nut.g}</b>g</Typography>
            <Typography align='center' sx={{fontSize:10}}>20%</Typography>
            </Box>
          )
        })}
      </Stack>
    </Box>
  );
}
