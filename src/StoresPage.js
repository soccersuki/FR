import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Box, Typography, Stack, Fab, Grid, Paper, Button} from '@mui/material'
import TitlebarImageList2 from './TitlebarImageList2'
import storesData from './storesData'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalConvenienceStoreTwoToneIcon from '@mui/icons-material/LocalConvenienceStoreTwoTone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fa7, faL, faF, faM} from '@fortawesome/free-solid-svg-icons'

import Page from './Page'


export default function StoresPage(){
  const navigate = useNavigate()
  const [id, setId] = useState(0);
  const handleClick = (id) => {
    console.log(id)
    setId(id);
  }
  const handleClickNext = () => {
    navigate('/search')
  }
  const stores = ['セブンイレブン', 'ローソン', 'ファミマ', 'ミニストップ'];
  const icons = [fa7, faL, faF, faM];

  return(
    <Page text='どちらのコンビニに行きますか?' icon={<LocalConvenienceStoreTwoToneIcon sx={{fontSize: 70}} color="secondary"/>} handleClick={handleClickNext}>
      <Box sx={{width: '100%', boxSizing: 'border-box', px: 6, mt: 10}}>
        <Grid container spacing={3}>
          {stores.map((store, i) => {
            return (
              <Grid item xs={6}>
                <Button sx={{width: '100%', height: 140, borderRadius: 10}} onClick={() => handleClick(i)} color='secondary' variant={i == id ? 'contained' : 'outlined'}>
                  <Stack alignItems="center" spacing={1}>
                    <FontAwesomeIcon icon={icons[i]} fontSize={30}/>
                    <Box>{store}</Box>
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
