import {useState} from 'react'
import {useNavigate, } from 'react-router-dom'
import {Box, Stack, Typography, Button, Fab, Divider} from '@mui/material'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import Page from './Page'

import {pink, blue, indigo, purple, cyan, orange, lime, grey} from '@mui/material/colors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBowlFood, faDrumstickBite, faBottleDroplet} from '@fortawesome/free-solid-svg-icons'



export default function GoalPage(){
  const navigate = useNavigate()
  const [id, setId] = useState(0);
  const handleClickNext = () => {
    console.log(id)
    navigate('/rests')
  }
  const handleClick = (id) => {
    setId(id);
  }
  const goals = ['ダイエット', '筋トレ', '特になし']
  const pfcs = [
    [{name: 'たんぱく質', value: 15}, {name: '脂質', value: 25}, {name: '炭水化物', value: 60}],
    [{name: 'たんぱく質', value: 20}, {name: '脂質', value: 20}, {name: '炭水化物', value: 60}],
    [{name: 'たんぱく質', value: 30}, {name: '脂質', value: 20}, {name: '炭水化物', value: 50}],
  ]
  const es = [800, 600, 900]
  const icons = [faDrumstickBite, faBowlFood, faBottleDroplet];

  return(
    <Page text={'あなたの目標は?'} icon={<LocalFireDepartmentTwoToneIcon  sx={{fontSize: 70}} color="secondary"/>} handleClick={handleClickNext}>

      <Stack spacing={3} justifyContent='center' alignItems="center" sx={{mt: 5, width:'100%'}}>
        {goals.map((goal, i) => {
          return(
            <Button onClick={() => handleClick(i)} variant={i == id ? 'contained' : 'outlined'} color='secondary' sx={{borderRadius: 10, width: '80%', height: 60}}><b>{goal}</b></Button>
          )
        })}
      </Stack>
      <Stack justifyContent='center' alignItems="center" sx={{mt: 3}}>
        <Typography fontSize={15}>摂取カロリー</Typography>
        <Stack direction='row' spacing={1} justifyContent='center' alignItems="center">
          <LocalFireDepartmentTwoToneIcon color="secondary"/>
          <Typography fontSize={30} color={cyan[300]}>{es[id]}</Typography>
          <Typography variant="span">kcal</Typography>
        </Stack>
      </Stack>
      <Stack direction='row' spacing={2} sx={{mt: 1}}  divider={<Divider orientation="vertical" flexItem />}>
        {pfcs[id].map((pfc, i) => {
          return(
            <Stack justifyContent='center' alignItems="center">
              <Typography fontSize={15}>{pfc.name}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <FontAwesomeIcon icon={icons[i]} color={pink[200]}/>
                <Typography color={cyan[300]} fontSize={20}>{pfc.value}</Typography>
                <Typography fontSize={15} variant="span" color={grey[700]}>%</Typography>
              </Stack>
            </Stack>
          )
        })}
      </Stack>
    </Page>
  )
}
