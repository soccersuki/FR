import './App.css';
import {useState, } from 'react'

import foods from './foods_lawson.json'
import {pink, grey} from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ProgressMobileStepper from './ProgressMobileStepper'


import TopPage from './TopPage'
import GoalPage from './GoalPage'
import StoresPage from './StoresPage'
import CategoriesPage from './CategoriesPage'
import FirstFoodsPage from './FirstFoodsPage'
import SecondFoodsPage from './SecondFoodsPage'
import ResultPage from './ResultPage'

const theme = createTheme({
  palette: {
    secondary: {
      main: pink[200],
      contrastText: '#fff'
    }
  },
  typography: {
    body1: {
      color: grey[700],
      letterSpacing: 1,
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

export default function App() {
  const [id, setId] = useState(-1);
  const [food1, setFood1] = useState(null);
  const [food2, setFood2] = useState(null);
  const [foods1, setFoods1] = useState([]);
  const [foods2, setFoods2] = useState([]);

  const [showTop, setShowTop] = useState(true);

  const handleClick = () => {
    setId(id + 1);
  }

  const pages = [
    <GoalPage handleClick={handleClick}/>,
    <StoresPage handleClick={handleClick}/>,
    <CategoriesPage foods={foods} setFoods1={setFoods1} handleClick={handleClick}/>,
    <FirstFoodsPage foods={foods} foods1={foods1} setFood1={setFood1} setFoods2={setFoods2} handleClick={handleClick}/>,
    <SecondFoodsPage foods2={foods2} setFood2={setFood2} handleClick={handleClick}/>,
    <ResultPage food1={food1} food2={food2} handleClick={handleClick}/>,
  ];

  return (
    <ThemeProvider theme={theme}>
      {id == -1 ?
        <TopPage handleClick={handleClick}/>
        :
        <>
          <ProgressMobileStepper activeStep={id} setActiveStep={setId}/>
          {pages[id]}
        </>
      }
    </ThemeProvider>
  );
}
