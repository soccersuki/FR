import {useState} from 'react'
import {Box, Typography, Stack, Fab, Grid, Paper, Button} from '@mui/material'

import LocalConvenienceStoreTwoToneIcon from '@mui/icons-material/LocalConvenienceStoreTwoTone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fa7, faL, faF} from '@fortawesome/free-solid-svg-icons'

import Page from './Page'


export default function StoresPage(props){
  const [id, setId] = useState(0);
  const handleClick = (id) => {
    setId(id);
  }
  const handleClickNext = () => {
    props.setStore(id);
    props.handleClick();
  }

  const options = [
    {
      text: 'セブイレ',
      icon: fa7,
    },
    {
      text: 'ローソン',
      icon: faL,
    },
    {
      text: 'ファミマ',
      icon: faF,
    },
  ]

  return(
    <Page text='どちらのコンビニに行きますか?' icon={<LocalConvenienceStoreTwoToneIcon sx={{fontSize: 70}} color="secondary"/>} handleClick={handleClickNext}>
      <Box sx={{width: '100%', boxSizing: 'border-box', mt: 10}}>
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
      </Box>
    </Page>
  )
}
