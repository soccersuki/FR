import {useState} from 'react'
// import FoodList from './FoodList'

import Page from './Page'

import ShuffleIcon from '@mui/icons-material/Shuffle';
import SortIcon from '@mui/icons-material/Sort';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';

import { grey, pink } from '@mui/material/colors';


import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import FoodInfoPage from './FoodInfoPage'
import {Box, Typography, Stack, Paper, List, ListItem, ListItemText, ListItemAvatar, IconButton, Avatar} from '@mui/material';



export default function FoodsPage(props){
  const [foods, setFoods] = useState(props.foods);
  const [state, setState] = useState(false);
  const [id, setId] = useState(0);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };

  const handleClick = (i) => {
    setId(i);
    setState(true);
  }

  const handleClickNext = () => {
    setState(false);
    props.handleClickNext(foods[id]);
  }

  const handleClickRandom = () => {
    setId(Math.floor(Math.random() * foods.length));
    setState(true);
  }

  const handleClickSort = (id) => {
    if(id == 0) foods.sort((a, b) => b[3] - a[3])
    else if(id == 1) foods.sort((a, b) => a[3] - b[3])
    setFoods([...foods])
  }

  const handleChange = (event) => {
    var id = event.target.value;
    if(id == 0) ;
    else if(id == 1) foods.sort((a, b) => b[3] - a[3]);
    else if(id == 2) foods.sort((a, b) => a[3] - b[3]);
    setFoods([...foods])
  }


  return(
    <Box sx={{width: '100%', boxSizing: 'border-box', px: 2, mt: 2}}>
      <SwipeableDrawer
        anchor={'bottom'}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={{ width: '100%'}} onClick={toggleDrawer(false)}>
          <FoodInfoPage food1={foods[id]} goal={props.goal} handleClick={handleClickNext}/>
        </Box>
      </SwipeableDrawer>
      <Buttons handleClick1={handleClickRandom} handleClick2={handleClickSort} handleChange={handleChange}/>
      <FoodList foods={foods} handleClick={handleClick} />
    </Box>
  )
}

function Buttons(props) {
  return (
    <Stack spacing={2} direction="row" justifyContent="space-between" sx={{width: '100%'}}>
      <Stack onClick={props.handleClick1}direction="row" alignItems='center' justifyContent="center" spacing={1} sx={{width: '48%', bgcolor: grey[200], color: pink[200], borderRadius: '10px', boxSizing: 'border-box', p: 1}}>
        <ShuffleIcon />
        <Typography fontSize={15} color={pink[200]} align="center">????????????</Typography>
      </Stack>
      <Stack direction="row" alignItems='center' justifyContent="center"  spacing={1} sx={{width: '48%', bgcolor: grey[200], color: pink[200], borderRadius: '10px', boxSizing: 'border-box', p: 1}}>
        <SortIcon />
        <Paper elevation={0} onChange={props.handleChange}component='select' sx={{bgcolor: grey[200], color: pink[200], outline: 'none', border: 'none', fontSize: 15}}>
          <option value={0}>?????????</option>
          <option value={1}>???????????????</option>
          <option value={2}>???????????????</option>
        </Paper>
      </Stack>
    </Stack>
  );
}


function FoodList(props) {
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 500}}>
        {props.foods?.slice(0, 20).map((food, i) => {
          return(
            <ListItem onClick={() => props.handleClick(i)}
              secondaryAction={
                <IconButton edge="end">
                  <ArrowForwardIosIcon />
                </IconButton>
              }
              divider
              disablePadding
              disableGutters
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: pink[200], }}>
                  <LocalFireDepartmentTwoToneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={<Typography noWrap>{food[0]}</Typography>}
                secondary={<Typography fontSize={13}>{`${food[3]}kcal`}</Typography>}
              />
            </ListItem>
          )
        })}
      </List>
    </>
  );
}
