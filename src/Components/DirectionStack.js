import Stack from '@mui/material/Stack';
import {Box, Typography, Divider, Paper} from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faDrumstickBite, faBottleDroplet} from '@fortawesome/free-solid-svg-icons'




export default function DirectionStack(props) {
  const pfc = [
    {
      name: 'たんぱく質',
      icon: faDrumstickBite,
      color: '#FFBB28',
      g: Math.floor(props.food[6]),
      p: Math.floor(props.food[6] * 4 / props.food[3] * 100),
      j: judge(Math.floor(props.food[6] * 4 / props.food[3] * 100), props.goal.pfc[0])
    },
    {
      name: '脂質',
      icon: faBottleDroplet,
      color: '#00C49F',
      g: Math.floor(props.food[4]),
      p: Math.floor(props.food[4] * 9 / props.food[3] * 100),
      j: judge(Math.floor(props.food[4] * 9 / props.food[3] * 100), props.goal.pfc[1])
    },
    {
      name: '炭水化物',
      icon: faBowlFood,
      color: '#0088FE',
      g: Math.floor(props.food[5]),
      p: Math.floor(props.food[5] * 4 / props.food[3] * 100),
      j: judge(Math.floor(props.food[5] * 4 / props.food[3] * 100), props.goal.pfc[2])
    },
  ]

  const result = [
    {
      text: '不足',
      color: '#82b1ff',
    },
    {
      text: '過剰',
      color: '#ff8a80',
    },
    {
      text: '適正',
      color: '#74b2a4',
    },
  ]

  return (
    <Box sx={{width: '100%'}}>
      <Stack direction="row" spacing={3} justifyContent="center" divider={<Divider orientation="vertical" flexItem />}>
        {pfc.map((nut, id) => {
          return(
            <Stack spacing={1} justifyContent="center" alignItems="center">
              <Typography sx={{fontSize:15}}>{nut.name}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <FontAwesomeIcon icon={nut.icon} color={nut.color}/>
                <Typography align='center'><b style={{fontSize: 25}}>{nut.g}</b></Typography>
                <Typography>g</Typography>
              </Stack>
              <Typography align='center' sx={{fontSize:20}}>{nut.p}<Typography variant="span" fontSize={15}>%</Typography></Typography>
              <Paper sx={{backgroundColor: result[nut.j].color, color: "white"}}><Typography color="white" sx={{mx:1}}>{result[nut.j].text}</Typography></Paper>
            </Stack>
          )
        })}
      </Stack>
    </Box>
  );
}

function judge(x, y){
  if(x < y * 0.8) return 0;
  else if(x > y * 1.2) return 1;
  else return 2;
}
