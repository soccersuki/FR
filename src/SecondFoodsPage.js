import {useNavigate, useLocation} from 'react-router-dom'
import {Box, Typography, Stack, Fab} from '@mui/material'
import FolderList from './FolderList'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Page from './Page'


export default function SecondFoodsPage(){
  const navigate = useNavigate()
  const location = useLocation()

  const {food1, foods2} = location.state


  const handleClick = (i) => {
    console.log('click')
    console.log(foods2[i])
    navigate('/result', {state: {food1: food1, food2: foods2[i]}})
  }
  return (
    <Page text={'一品目を選んでください'} icon={<LocalFireDepartmentIcon sx={{fontSize: 50}}/>}>
      <Box sx={{width: '100%', boxSizing: 'border-box', px: 2, mt: 2}}>
      <FolderList foods={foods2} handleClick={handleClick} />
      </Box>
    </Page>
  );
}
