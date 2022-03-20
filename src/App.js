import './App.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedInputBase from './MyInput'

import MyPieChart from './MyPieChart'
import DirectionStack from './DirectionStack'

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";

import { pink } from '@mui/material/colors';


import FolderList from './FolderList'
import TitlebarImageList from './TitlebarImageList'
import BasicButtons from './BasicButtons'
import foods from './foods_lawson.json'

import './background.css'

import {Stack, Divider, } from '@mui/material'



const eI = [1600 / 3, 2250 / 3]
const pI = [0.15, 0.25]
const fI = [0.15, 0.25]
const cI = [0.50, 0.60]

foods.sort((a, b) => b[3] - a[3])

foods = foods.filter((food) => {
  const [,,,e, f, c, p] = food

  for(var food2 of foods){
    const [,,,e2, f2, c2, p2] = food2
    var ok = e + e2 > eI[0] && e + e2 < eI[1]
    ok = ok && p + p2 > (e + e2) * pI[0] / 4 && p + p2 < (e + e2) * pI[1] / 4
    ok = ok && f + f2 > (e + e2) * fI[0] / 9 && f + f2 < (e + e2) * fI[1] / 9
    ok = ok && c + c2 > (e + e2) * cI[0] / 4 && c + c2 < (e + e2) * cI[1] / 4

    if(ok) return true
  }
  return false
})

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/first' element={<FirstFoods />} />
        <Route path='/second' element={<SecondFoods />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

function Categories(){
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/first')
  }
  return(
    <Box sx={{width: '100%'}}>
      <Top text='検索' />
      <Box sx={{m: 2}}>
        <CustomizedInputBase />
        <TitlebarImageList handleClick={handleClick}/>
      </Box>
    </Box>
  )
}

function Top(props){
  return(
    <Box sx={{ m: 2 }}>
      <Typography variant='h4'><b>{props.text}</b></Typography>
    </Box>
  )
}


function FirstFoods() {
  const navigate = useNavigate()

  const handleClick = (i) => {
    const food1 = foods[i]
    const [,,,e, f, c, p] = food1

    const foods2 = foods.filter((food) => {
      const [,,,e2, f2, c2, p2] = food

      var ok = e + e2 > eI[0] && e + e2 < eI[1]
      ok = ok && p + p2 > (e + e2) * pI[0] / 4 && p + p2 < (e + e2) * pI[1] / 4
      ok = ok && f + f2 > (e + e2) * fI[0] / 9 && f + f2 < (e + e2) * fI[1] / 9
      ok = ok && c + c2 > (e + e2) * cI[0] / 4 && c + c2 < (e + e2) * cI[1] / 4

      return ok
    })

    console.log(foods2)

    navigate('/second', {state: {food1: food1, foods2: foods2}})
  }

  return(
    <Box sx={{width: '100%'}}>
      <Top text='ローソン 肉' />
      <Box sx={{mx: 2}}>
      <BasicButtons />
      <FolderList foods={foods} handleClick={handleClick} />
      </Box>
    </Box>
  )
}

function SecondFoods(){
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location)

  const {food1, foods2} = location.state


  const handleClick = (i) => {
    console.log('click')
    console.log(foods2[i])
    navigate('/result', {state: {food1: food1, food2: foods2[i]}})
  }
  return (
    <Box sx={{width: '100%'}}>
      <Box>
        <Box sx={{m: 2}}>
          <Typography variant='h4'><b>{food1[0]}</b></Typography>
          <Stack direction='row'alignItems="center">
            <Box sx={{width: '50%'}}>
              <MyPieChart food={food1}/>
            </Box>
            <Box>
              <DirectionStack />
            </Box>
          </Stack>
          <Divider />
        </Box>

      </Box>
      <Box sx={{mx: 2}}>
        <Typography variant='h6' sx={{}}><b>おすすめ</b></Typography>
        <FolderList foods={foods2} handleClick={handleClick} />
      </Box>
    </Box>
  );
}

function Result(){
  const location = useLocation()

  const {food1, food2} = location.state

  const sum = ['合計', null, null, food1[3] + food2[3], food1[4] + food2[4], food1[5] + food2[5], food1[6] + food2[6]]

  // const per1 = per(food1[3], food1[6], food1[4], food1[5])
  // const per2 = per(food2[3], food2[6], food2[4], food2[5])
  // const per3 = per(sum[3], sum[6], sum[4], sum[5])

  return(
    <Box sx={{m: 2}}>
      <Typography variant='h4'><b>合計</b></Typography>
      <MyPieChart food={sum} />
      <Typography align='center' variant='h6'><b>{food1[0]}</b></Typography>
      <Typography align='center'>&</Typography>
      <Typography align='center' variant='h6'><b>{food2[0]}</b></Typography>
      <Box sx={{my: 2}}>
      <DirectionStack />
      </Box>
    </Box>
  )
}

// function per(e, p, f, c){
//   return [Math.round(p * 4 / e * 100), Math.round(f * 9 / e * 100), Math.round(c * 4 / e * 100)]
// }


export default App;
