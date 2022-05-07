import {useState} from 'react'
import {Box, Typography, Stack} from '@mui/material'
import BasicButtons from './BasicButtons'
import FolderList from './FolderList'

import Page from './Page'



import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import FoodInfoPage from './FoodInfoPage'

import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';

const eI = [1600 / 3, 2250 / 3]
const pI = [0.15, 0.25]
const fI = [0.15, 0.25]
const cI = [0.50, 0.60]


export default function FirstFoodsPage(props) {
  const [foods1, setFoods1] = useState(props.foods1)
  const {foods} = props;

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

  const handleClickNext = () => {
    const food1 = foods1[id]
    const [,,,e, f, c, p] = food1

    const foods2 = foods.filter((food) => {
      const [,,,e2, f2, c2, p2] = food

      var ok = e + e2 > eI[0] && e + e2 < eI[1]
      ok = ok && p + p2 > (e + e2) * pI[0] / 4 && p + p2 < (e + e2) * pI[1] / 4
      ok = ok && f + f2 > (e + e2) * fI[0] / 9 && f + f2 < (e + e2) * fI[1] / 9
      ok = ok && c + c2 > (e + e2) * cI[0] / 4 && c + c2 < (e + e2) * cI[1] / 4

      return ok
    })

    props.setFood1(food1);
    props.setFoods2(foods2);

    setState(false);
    setTimeout(() => {
      props.handleClick();
    }, 500)
  }

  const handleClick = (i) => {
    setId(i);
    setState(true);
  }

  const handleClick1 = () => {
    setId(Math.floor(Math.random() * foods1.length));
    setState(true);
  }

  const handleClick2 = (id) => {
    if(id == 0) foods1.sort((a, b) => b[3] - a[3])
    else if(id == 1) foods1.sort((a, b) => a[3] - b[3])
    setFoods1([...foods1])
  }


  return(
    <Page text={'一品目を選んでください'} icon={<SetMealTwoToneIcon sx={{fontSize: 70}} color="secondary"/>}>
      <Box sx={{width: '100%', boxSizing: 'border-box', px: 2, mt: 2}}>
        <SwipeableDrawer
          anchor={'bottom'}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box sx={{ width: '100%'}} onClick={toggleDrawer(false)}>
            <FoodInfoPage food1={foods1[id]} handleClick={handleClickNext}/>
          </Box>
        </SwipeableDrawer>
        <BasicButtons handleClick1={handleClick1} handleClick2={handleClick2}/>
        <FolderList foods={foods1} handleClick={handleClick} />
      </Box>
    </Page>
  )
}
