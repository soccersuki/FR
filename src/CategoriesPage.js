import {useState} from 'react'
import {Box, Typography, Divider, Fab, Stack, Grid, Button} from '@mui/material'
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBowlFood, faDrumstickBite, faBottleDroplet} from '@fortawesome/free-solid-svg-icons'


import Page from './Page'
import MyInput from './MyInput'
import categoriesData from './categoriesData'


export default function CategoriesPage(props){
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

    // navigate('/first', {state: {foods1: foods1}})
  }

  const handleClickNext = () => {
    console.log(categoriesData[id]);
    const foods1 = foods.filter((food) => {
      return categoriesData[id].queries.some(query => food[0].includes(query));
    })
    console.log(foods1);
    props.setFoods1(foods1);
    props.handleClick();
    // navigate('/first', {state: {foods1: foods1}})
  }

  return(
    <Page text={'何が食べたいですか'} icon={<CategoryTwoToneIcon sx={{fontSize: 70}} color="secondary"/>} handleClick={handleClickNext}>
    <Box sx={{width: '100%', boxSizing: 'border-box', px: 6, mt: 2}}>
    <Box sx={{mt: 2}}><MyInput handleSubmit={handleSubmit}/></Box>
    <Divider sx={{mt: 2, width: '100%'}}/>

      <Grid container spacing={3} sx={{mt: 1}}>
        {categoriesData.map((store, i) => {
          return (
            <Grid item xs={6}>
              <Button onClick={() => handleClick(i)} sx={{width: '100%', height: 140, borderRadius: 10}} color='secondary' variant={i == id ? 'contained' : 'outlined'}>
                <Stack alignItems="center" spacing={1}>
                  <FontAwesomeIcon icon={faDrumstickBite} fontSize={20} beat={i == id}/>
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
