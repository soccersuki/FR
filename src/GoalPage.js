import {useState} from 'react'
import {useNavigate, } from 'react-router-dom'
import {Box, Stack, Typography, Button, Fab} from '@mui/material'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import Page from './Page'


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

  return(
    <Page text={'あなたの目標は?'} icon={<LocalFireDepartmentIcon  sx={{fontSize: 50}}/>} handleClick={handleClickNext}>
      <Stack spacing={3} justifyContent='center' alignItems="center" sx={{mt: 5, width:'100%'}}>
        {goals.map((goal, i) => {
          return(
            <Button onClick={() => handleClick(i)} variant={i == id ? 'contained' : 'outlined'} color='secondary' sx={{borderRadius: 10, width: '80%', height: 60}}><b>{goal}</b></Button>
          )
        })}
      </Stack>
      <Stack justifyContent='center' alignItems="center" sx={{mt: 3}}>
        <Typography fontSize={13}>摂取カロリー</Typography>
        <Stack direction='row' spacing={1} justifyContent='center' alignItems="center">
          <LocalFireDepartmentIcon />
          <Typography fontSize={30}>{es[id]}</Typography>
          <Typography>kcal</Typography>
        </Stack>
      </Stack>
      <Stack direction='row' spacing={2} sx={{mt: 1}}>
        {pfcs[id].map((pfc, i) => {
          return(
            <Stack justifyContent='center' alignItems="center">
              <Typography fontSize={13}>{pfc.name}</Typography>
              <Typography><b style={{ fontSize: 20}}>{pfc.value}</b>%</Typography>
            </Stack>
          )
        })}
      </Stack>
    </Page>
  )
}
