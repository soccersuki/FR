import './App.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MyInput from './MyInput'

import MyPieChart from './MyPieChart'
import DirectionStack from './DirectionStack'

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";


import FolderList from './FolderList'
import TitlebarImageList from './TitlebarImageList'
import BasicButtons from './BasicButtons'
import foods from './foods_lawson.json'
import ProgressMobileStepper from './ProgressMobileStepper'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import {Stack, Divider, Button, Grid, Paper, TextField, Fab, Input, InputBase, InputAdornment} from '@mui/material'

import {useState, } from 'react'

import {pink} from '@mui/material/colors'

import { CookiesProvider, useCookies } from 'react-cookie';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: pink[200]
    }
  }
})

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
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<Initialize />}/>
            <Route path='/test' element={<Test />}/>
            <Route path='/search' element={<Categories />} />
            <Route path='/first' element={<FirstFoods />} />
            <Route path='/second' element={<SecondFoods />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </ThemeProvider>
  );
}

function Test(){
  const [cookies, setCookie] = useCookies(['name']);

  function onChange(newName) {
    setCookie('name', newName, { path: '/' });
    console.log()
  }

  return (
    <div>
      <TextField onChange={(e) => onChange(e.target.value)} />
      {cookies.name && <h1>Hello {cookies.name}!</h1>}
    </div>
  );
}



function Initialize(){
  const [activeStep, setActiveStep] = useState(0);
  const [cookies, setCookie] = useCookies(['name']);
  const [info, setInfo] = useState({});
  const handleClickButton = (id) => {
    setInfo({...info, sex: id})
    setActiveStep(activeStep + 1)
  }
  const handleClick = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const buttons = (
    <Stack spacing={2} sx={{width: '100%'}}>
      <Stack direction="row" spacing={2} sx={{width: '100%'}} justifyContent="center" alignItems="center">
        <Button onClick={() => handleClickButton(0)} variant="outlined" sx={{width: '30%', aspectRatio: '1', borderRadius: 10}}>
          <Stack>
            <LocalFireDepartmentIcon sx={{fontSize: 40}}/>
            <Typography>item</Typography>
          </Stack>
        </Button>
        <Button onClick={() => handleClickButton(1)} variant="outlined" sx={{width: '30%', aspectRatio: '1', borderRadius: 10}}>
          <Stack>
            <LocalFireDepartmentIcon sx={{fontSize: 40}}/>
            <Typography>item</Typography>
          </Stack>
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} sx={{width: '100%'}} justifyContent="center" alignItems="center">
        <Button onClick={() => handleClickButton(2)} variant="outlined" sx={{width: '30%', aspectRatio: '1', borderRadius: 10}}>
          <Stack>
            <LocalFireDepartmentIcon sx={{fontSize: 40}}/>
            <Typography>item</Typography>
          </Stack>
        </Button>
        <Button onClick={() => handleClickButton(3)} variant="outlined" sx={{width: '30%', aspectRatio: '1', borderRadius: 10}}>
          <Stack>
            <LocalFireDepartmentIcon sx={{fontSize: 40}}/>
            <Typography>item</Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  )

  const pages = [
    buttons,
    <>
      <InputBase placeholder='0' type='number' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', style: { textAlign: 'center' } }} sx={{fontSize: 40, width: '20%'}}/>
      <Typography>cm</Typography>
    </>
  ]

  return (
    <Box sx={{height: window.innerHeight}}>
      <Box sx={{height: '100%'}}>
        <Box sx={{height: '80%'}}>
          {activeStep == 0 ?
            <Box sx={{height: '100%', alignContent: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
              <LocalFireDepartmentIcon sx={{fontSize: 300, color: pink[500]}}/>
            </Box>
            :
            <Stack justifyContent="flex-start" alignItems="center">
              <ProgressMobileStepper sx={{my: 2}} activeStep={activeStep} handleBack={handleBack}/>
              <LocalFireDepartmentIcon sx={{fontSize: 50, my: 2}}/>
              <Typography sx={{my: 2}}>まずは</Typography>
              {pages[activeStep-1]}
            </Stack>
          }
        </Box>
        {activeStep == 0 &&
          <Box sx={{height: '20%', alignContent: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Fab color='secondary' variant='extended' onClick={handleClick} sx={{width: '60%'}}><Typography sx={{color: 'white'}}>次へ</Typography></Fab>
          </Box>
        }
      </Box>
    </Box>
  )
}


function Categories(){
  const navigate = useNavigate()

  const handleSubmit = (text) => {
    console.log(text)

    const foods1 = foods.filter((food) => {
      return food[0].includes(text)
    })
    console.log(foods1)

    navigate('/first', {state: {foods1: foods1}})
  }

  const handleClick = () => {
    navigate('/first', {state: {foods1: foods}})
  }
  return(
    <Box sx={{width: '100%'}}>
      <Top text='検索' />
      <Box sx={{m: 2}}>
        <Box sx={{mb: 2}}><MyInput handleSubmit={handleSubmit}/></Box>
        <Divider />
        <Typography sx={{mt: 1}}><b>カテゴリを検索</b></Typography>
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
  const location = useLocation()

  // const {foods1} = location.state
  const [foods1, setFoods1] = useState(location.state.foods1)



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

    navigate('/second', {state: {food1: food1, foods2: foods2}})
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

    navigate('/second', {state: {food1: food1, foods2: foods2}})

  }

  const handleClick2 = (id) => {
    console.log(id)
    if(id == 0) foods1.sort((a, b) => b[3] - a[3])
    else if(id == 1) foods1.sort((a, b) => a[3] - b[3])
    setFoods1([...foods1])
  }

  return(
    <Box sx={{width: '100%'}}>
      <Top text='ローソン 肉' />
      <Box sx={{mx: 2}}>
        <BasicButtons handleClick1={handleClick1} handleClick2={handleClick2} />
        <FolderList foods={foods1} handleClick={handleClick} />
      </Box>
    </Box>
  )
}

function SecondFoods(){
  const navigate = useNavigate()
  const location = useLocation()

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
