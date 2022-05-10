import {useState} from 'react'
import {Box, Typography, Divider, Stack, Grid, Button, Paper, InputBase, IconButton, } from '@mui/material'
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {grey} from '@mui/material/colors'


import Page from './Page'
import categoriesData from '../Data/categoriesData'

import foodsSeven from '../Data/foods_seven.json'
import foodsLawson from '../Data/foods_lawson.json'
import foodsFamily from '../Data/foods_family.json'

const foodsRaw = [
  foodsSeven,
  foodsLawson,
  foodsFamily,
]


export default function CategoriesPage(props){
  const [id, setId] = useState(0)
  // const {foods} = props;

  const handleClick = (i) => {
    setId(i);
  }

  const handleSubmit = (text) => {
    const foods = getFoods();
    const foods1 = foods.filter((food) => {
      return food[0].includes(text)
    })
    props.setFoods1(foods1);
    props.handleClick();
  }

  const handleClickNext = () => {
    const foods = getFoods();
    const foods1 = foods.filter((food) => {
      return categoriesData[id].queries.some(query => food[0].includes(query));
    })
    props.setFoods1(foods1);
    props.handleClick();
  }

  const getFoods = () => {
    const foods = foodsRaw[props.store].filter(food => {
      const [,,,e, f, c, p] = food;
      for(var food2 of foodsRaw[props.store]){
        const [,,,e2, f2, c2, p2] = food2
        var ok = e + e2 > props.goal.e * 0.8 && e + e2 < props.goal.e * 1.2
        ok = ok && p + p2 > (e + e2) * props.goal.pfc[0] / 100 * 0.8 / 4 && p + p2 < (e + e2) * props.goal.pfc[0] / 100 * 1.2 / 4
        ok = ok && f + f2 > (e + e2) * props.goal.pfc[1] / 100 * 0.8 / 9 && f + f2 < (e + e2) * props.goal.pfc[1] / 100 * 1.2 / 9
        ok = ok && c + c2 > (e + e2) * props.goal.pfc[2] / 100 * 0.8 / 4 && c + c2 < (e + e2) * props.goal.pfc[2] / 100 * 1.2 / 4

        if(ok) return true
      }
      return false
    });
    props.setFoods(foods);
    return foods;
  }

  return(
    <Page text={'何が食べたいですか'} icon={<CategoryTwoToneIcon sx={{fontSize: 70}} color="secondary"/>} handleClick={handleClickNext}>
      <Box sx={{width: '100%', boxSizing: 'border-box', px: 6, mt: 2}}>
        <Box sx={{mt: 2}}><MyInput handleSubmit={handleSubmit}/></Box>
        <Divider sx={{mt: 2, width: '100%'}}/>
        <Grid container spacing={3} sx={{mt: 1}}>
          {categoriesData.map((category, i) => {
            return (
              <Grid item xs={6}>
                <Button onClick={() => handleClick(i)} sx={{width: '100%', height: 140, borderRadius: 10}} color='secondary' variant={i == id ? 'contained' : 'outlined'}>
                  <Stack alignItems="center" spacing={1}>
                    <FontAwesomeIcon icon={category.icon} fontSize={20} beat={i == id}/>
                    <Box>{category.text}</Box>
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

function MyInput(props) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(text)
  }

  return (
    <Paper
      component="form"
      elevation={0}
      sx={{ borderRadius: 2, display: 'flex', alignItems: 'center', width: '100%', bgcolor: grey[200] }}
      onSubmit={handleSubmit}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Paper>
  );
}
