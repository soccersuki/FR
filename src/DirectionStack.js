import Stack from '@mui/material/Stack';
import {Box, Typography, Chip, Divider, Paper} from '@mui/material'

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
    },
    {
      name: '脂質',
      icon: faBowlFood,
      color: '#00C49F',
      g: Math.floor(props.food[4]),
      p: Math.floor(props.food[4] * 4 / props.food[3] * 100),
    },
    {
      name: '炭水化物',
      icon: faBottleDroplet,
      color: '#0088FE',
      g: Math.floor(props.food[5]),
      p: Math.floor(props.food[5] * 4 / props.food[3] * 100),
    },
  ]

  const judge = [
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
              <Paper sx={{backgroundColor: judge[id].color, color: "white"}}><Typography color="white" sx={{mx:1}}>{judge[id].text}</Typography></Paper>
            </Stack>
          )
        })}
      </Stack>
    </Box>
  );
}
