import {useState} from 'react'
import {useNavigate, } from 'react-router-dom'
import {Box, Typography, Divider, Fab, Stack, Grid, Button} from '@mui/material'
import MyInput from './MyInput'
import TitlebarImageList2 from './TitlebarImageList2'
import categoriesData from './categoriesData'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import Page from './Page'

export default function CategoriesPage(props){
  const navigate = useNavigate();
  const [id, setId] = useState(0)
  const {foods} = props;

  const handleClick = (i) => {
    console.log(i);
    setId(i);
  }

  const handleSubmit = (text) => {
    console.log(text)

    const foods1 = foods.filter((food) => {
      return food[0].includes(text)
    })
    console.log(foods1)

    navigate('/first', {state: {foods1: foods1}})
  }

  const handleClickNext = () => {
    console.log(categoriesData[id]);
    const foods1 = foods.filter((food) => {
      return categoriesData[id].queries.some(query => food[0].includes(query));
    })
    console.log(foods1);
    navigate('/first', {state: {foods1: foods1}})
  }

  return(
    <Page text={'何が食べたいですか'} icon={<LocalFireDepartmentIcon sx={{fontSize: 50}}/>} handleClick={handleClickNext}>
    <Box sx={{width: '100%', boxSizing: 'border-box', px: 6, mt: 2}}>
    <Box sx={{mt: 2}}><MyInput handleSubmit={handleSubmit}/></Box>
    <Divider sx={{mt: 2, width: '100%'}}/>

      <Grid container spacing={3} sx={{mt: 1}}>
        {categoriesData.map((store, i) => {
          return (
            <Grid item xs={6}>
              <Button onClick={() => handleClick(i)} sx={{width: '100%', height: 140, borderRadius: 10}} color='secondary' variant={i == id ? 'contained' : 'outlined'}>
                <Stack alignItems="center" spacing={1}>
                  <LocalFireDepartmentIcon/>
                  <Box>{store.title}</Box>
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
