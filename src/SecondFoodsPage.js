import {useState} from 'react'
import {Box, Typography, Stack, Fab} from '@mui/material'
import FolderList from './FolderList'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Page from './Page'


export default function SecondFoodsPage(props){
  const [foods2, setFoods2] = useState(props.foods2);


  const handleClick = (i) => {
    console.log('click')
    console.log(foods2[i])
    props.setFood2(foods2[i]);
    props.handleClick();
    // navigate('/result', {state: {food1: food1, food2: foods2[i]}})
  }
  return (
    <Page text={'二品目を選んでください'} icon={<LocalFireDepartmentIcon sx={{fontSize: 70}} color="secondary"/>}>
      <Box sx={{width: '100%', boxSizing: 'border-box', px: 2, mt: 2}}>
      <FolderList foods={foods2} handleClick={handleClick} />
      </Box>
    </Page>
  );
}
