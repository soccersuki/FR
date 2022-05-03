import {useNavigate, useLocation} from 'react-router-dom'
import {useState} from 'react'
import {Box, Typography, Stack} from '@mui/material'
import BasicButtons from './BasicButtons'
import FolderList from './FolderList'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Page from './Page'

import MyDrawer from './MyDrawer'

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import FoodInfoPage from './FoodInfoPage'

import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';

const eI = [1600 / 3, 2250 / 3]
const pI = [0.15, 0.25]
const fI = [0.15, 0.25]
const cI = [0.50, 0.60]


export default function FirstFoodsPage(props) {
  const navigate = useNavigate()
  const location = useLocation()

  // const {foods1} = location.state
  const [foods1, setFoods1] = useState(location.state.foods1)
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

    setState(false);
    setTimeout(() => {
      navigate('/second', {state: {food1: food1, foods2: foods2}})
    }, 500)
    // navigate('/second', {state: {food1: food1, foods2: foods2}})
  }




  const handleClick = (i) => {
    const food1 = foods1[i]
    const [,,,e, f, c, p] = food1

    const foods2 = foods.filter((food) => {
      const [,,,e2, f2, c2, p2] = food

      var ok = e + e2 > eI[0] && e + e2 < eI[1]
      ok = ok && p + p2 > (e + e2) * pI[0] / 4 && p + p2 < (e + e2) * pI[1] / 4
      ok = ok && f + f2 > (e + e2) * fI[0] / 9 && f + f2 < (e + e2) * fI[1] / 9
      ok = ok && c + c2 > (e + e2) * cI[0] / 4 && c + c2 < (e + e2) * cI[1] / 4

      return ok
    })
    setId(i);
    setState(true);

    // navigate('/foodinfo', {state: {food1: food1, foods2: foods2}})
  }

  const handleClick1 = () => {
    const food1 = foods1[Math.floor(Math.random() * foods1.length)]

    const [,,,e, f, c, p] = food1

    const foods2 = foods.filter((food) => {
      const [,,,e2, f2, c2, p2] = food

      var ok = e + e2 > eI[0] && e + e2 < eI[1]
      ok = ok && p + p2 > (e + e2) * pI[0] / 4 && p + p2 < (e + e2) * pI[1] / 4
      ok = ok && f + f2 > (e + e2) * fI[0] / 9 && f + f2 < (e + e2) * fI[1] / 9
      ok = ok && c + c2 > (e + e2) * cI[0] / 4 && c + c2 < (e + e2) * cI[1] / 4

      return ok
    })

    navigate('/foodinfo', {state: {food1: food1, foods2: foods2}})

  }

  const handleClick2 = (id) => {
    console.log(id)
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
          <Box
            sx={{ width: '100%'}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <FoodInfoPage food1={foods1[id]} handleClick={handleClickNext}/>
          </Box>

        </SwipeableDrawer>
        <BasicButtons handleClick1={toggleDrawer(true)} handleClick2={handleClick2}/>
        <FolderList foods={foods1} handleClick={handleClick} />
      </Box>
    </Page>
  )
}
