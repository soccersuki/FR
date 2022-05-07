import {useState} from 'react'
import {Box, Typography, Stack, Fab, Grid, Paper, Button} from '@mui/material'

import LocalConvenienceStoreTwoToneIcon from '@mui/icons-material/LocalConvenienceStoreTwoTone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fa7, faL, faF, faM} from '@fortawesome/free-solid-svg-icons'

import Page from './Page'


export default function StoresPage(props){
  const [id, setId] = useState(0);
  const handleClick = (id) => {
    setId(id);
  }

  const options = [
    {
      text: 'セブンイレブン',
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
    {
      text: 'ミニストップ',
      icon: faM,
    },
  ]

  return(
    <Page text='どちらのコンビニに行きますか?' icon={<LocalConvenienceStoreTwoToneIcon sx={{fontSize: 70}} color="secondary"/>} handleClick={props.handleClick}>
      <Box sx={{width: '100%', boxSizing: 'border-box', px: 6, mt: 10}}>
        <Grid container spacing={3}>
          {options.map((option, i) => {
            return (
              <Grid item xs={6}>
                <Button sx={{width: '100%', height: 140, borderRadius: 10}} onClick={() => handleClick(i)} color='secondary' variant={i == id ? 'contained' : 'outlined'}>
                  <Stack alignItems="center" spacing={1}>
                    <FontAwesomeIcon icon={option.icon} fontSize={30} bounce={i == id}/>
                    <Box>{option.text}</Box>
                  </Stack>
                </Button>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Page>
  )
}
