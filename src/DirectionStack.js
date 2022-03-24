import Stack from '@mui/material/Stack';
import {Box, Typography, Chip} from '@mui/material'
// import { grey } from '@mui/material/colors';


export default function DirectionStack(props) {
  const pfc = [
    {name: 'たんぱく質', g: Math.floor(props.food[6]), p: Math.floor(props.food[6] * 4 / props.food[3] * 100), color: '#FFBB28'},
    {name: '脂質', g: Math.floor(props.food[4]), p: Math.floor(props.food[4] * 9 / props.food[3] * 100), color: '#00C49F'},
    {name: '炭水化物', g: Math.floor(props.food[5]), p: Math.floor(props.food[5] * 4 / props.food[3] * 100), color: '#0088FE'},
  ]
  const s = [{l: '不足', c: 'primary'}, {l: '過剰', c: 'error'}, {l: '適正', c: 'success'}]
  return (
    <Box sx={{width: '100%'}}>
      <Stack direction="row" spacing={2} justifyContent="space-around">
        {pfc.map((nut, id) => {
          return(
            <Stack spacing={0.5} justifyContent="center" alignItems="center">
              <Typography display="block"align='center' sx={{color: nut.color, fontSize:10}}>{nut.name}</Typography>
              <Typography align='center'><b style={{fontSize: 20}}>{nut.g}</b>g</Typography>
              <Typography align='center' sx={{fontSize:10}}>{nut.p}%</Typography>
              <Chip label={s[id].l} color={s[id].c}  size="small" sx={{fontSize: 10}}/>
            </Stack>
          )
        })}
      </Stack>
    </Box>
  );
}
