import {useState} from 'react'
import {Box, Stack, Typography, Button, Fab, Divider} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faDrumstickBite, faBottleDroplet, faHeartPulse, faDumbbell, faWeightScale} from '@fortawesome/free-solid-svg-icons'
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';

import Page from './Page'


export default function GoalPage(props){
  const [id, setId] = useState(0);
  const handleClick = (id) => {
    setId(id);
  }
  const handleClickNext = () => {
    props.setGoal(options[id]);
    props.handleClick();
  }

  const options = [
    {
      text: '健康維持',
      icon: faHeartPulse,
      e: 800,
      pfc: [15, 25, 60],
    },
    {
      text: '筋トレ',
      icon: faDumbbell,
      e: 1000,
      pfc: [30, 20, 50],
    },
    {
      text: 'ダイエット',
      icon: faWeightScale,
      e: 600,
      pfc: [20, 20, 60],
    },
  ]


  return(
    <Page text={'あなたの目標は?'} icon={<RocketLaunchTwoToneIcon sx={{fontSize: 70}} color="secondary"/>} handleClick={handleClickNext}>
      <Stack spacing={3} justifyContent='center' alignItems="center" sx={{mt: 5, width:'100%'}}>
        {options.map((option, i) => {
          return(
            <Button onClick={() => handleClick(i)} variant={i == id ? 'contained' : 'outlined'} color='secondary' sx={{borderRadius: 10, width: '80%', height: 60}}>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{width: '100%'}}>
                <FontAwesomeIcon icon={option.icon} fontSize={i == id ? 30 : 18}/>
                <b>{option.text}</b>
              </Stack>
            </Button>
          )
        })}
      </Stack>
      <Energy e={options[id].e}/>
      <Pfc pfc={options[id].pfc}/>
    </Page>
  )
}

function Energy(props){
  return(
    <Stack justifyContent='center' alignItems="center" sx={{mt: 3}}>
      <Typography fontSize={15}>摂取カロリー</Typography>
      <Stack direction='row' spacing={1} justifyContent='center' alignItems="center">
        <LocalFireDepartmentTwoToneIcon color="secondary"/>
        <Typography fontSize={30}>{props.e}</Typography>
        <Typography variant="span">kcal</Typography>
      </Stack>
    </Stack>
  )
}

function Pfc(props){
  const pfc = [
    {
      name: 'たんぱく質',
      icon: faDrumstickBite,
      color: '#FFBB28',
    },
    {
      name: '脂質',
      icon: faBowlFood,
      color: '#00C49F',
    },
    {
      name: '炭水化物',
      icon: faBottleDroplet,
      color: '#0088FE',
    },
  ]

  return(
    <Stack direction='row' spacing={2} sx={{mt: 1}}  divider={<Divider orientation="vertical" flexItem />}>
      {props.pfc.map((value, i) => {
        return(
          <Stack justifyContent='center' alignItems="center">
            <Typography fontSize={15}>{pfc[i].name}</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <FontAwesomeIcon icon={pfc[i].icon} color={pfc[i].color}/>
              <Typography fontSize={20}>{value}</Typography>
              <Typography fontSize={15} variant="span">%</Typography>
            </Stack>
          </Stack>
        )
      })}
    </Stack>
  )
}
