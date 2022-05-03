import Stack from '@mui/material/Stack';
import {Box, Typography, Chip, Divider, Paper} from '@mui/material'
import { cyan, pink } from '@mui/material/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBowlFood, faDrumstickBite, faBottleDroplet} from '@fortawesome/free-solid-svg-icons'




export default function DirectionStack(props) {
  const pfc = [
    {name: 'たんぱく質', g: Math.floor(props.food[6]), p: Math.floor(props.food[6] * 4 / props.food[3] * 100), color: '#FFBB28'},
    {name: '脂質', g: Math.floor(props.food[4]), p: Math.floor(props.food[4] * 9 / props.food[3] * 100), color: '#00C49F'},
    {name: '炭水化物', g: Math.floor(props.food[5]), p: Math.floor(props.food[5] * 4 / props.food[3] * 100), color: '#0088FE'},
  ]
  const s = [{l: '不足', c: 'primary'}, {l: '過剰', c: 'error'}, {l: '適正', c: 'success'}]
  const icons = [faDrumstickBite, faBowlFood, faBottleDroplet];
  const colors = ["#82b1ff", "#ff8a80", "#74b2a4"]

  return (
    <Box sx={{width: '100%'}}>
      <Stack direction="row" spacing={3} justifyContent="center" divider={<Divider orientation="vertical" flexItem />}>
        {pfc.map((nut, id) => {
          return(
            <Stack spacing={1} justifyContent="center" alignItems="center">
              <Typography sx={{fontSize:15}}>{nut.name}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <FontAwesomeIcon icon={icons[id]} color={nut.color}/>
                <Typography align='center'><b style={{fontSize: 25}}>{nut.g}</b></Typography>
                <Typography>g</Typography>
              </Stack>
              <Typography align='center' sx={{fontSize:20}}>{nut.p}<Typography variant="span" fontSize={15}>%</Typography></Typography>
              <Paper sx={{backgroundColor: colors[id], color: "white"}}><Typography color="white" sx={{mx:1}}>{s[id].l}</Typography></Paper>
            </Stack>
          )
        })}
      </Stack>
    </Box>
  );
}
