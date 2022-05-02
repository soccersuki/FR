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
  useLocation,
  HashRouter,
} from "react-router-dom";

import FolderList from './FolderList'
import TitlebarImageList from './TitlebarImageList'
import TitlebarImageList2 from './TitlebarImageList2'
import BasicButtons from './BasicButtons'
import foods from './foods_lawson.json'
import ProgressMobileStepper from './ProgressMobileStepper'


import {Stack, Divider, Button, Grid, Paper, TextField, Fab, Input, InputBase, InputAdornment} from '@mui/material'

import {useState, } from 'react'

import {pink, grey} from '@mui/material/colors'

import { CookiesProvider, useCookies } from 'react-cookie';

import { ThemeProvider, createTheme } from '@mui/material/styles';




import CategoriesPage from './CategoriesPage'
import StoresPage from './StoresPage'
import GoalPage from './GoalPage'
import FirstFoodsPage from './FirstFoodsPage'
import FoodInfoPage from './FoodInfoPage'
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
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <ProgressMobileStepper />
        <HashRouter>
          <Routes>
            <Route path='/' element={<GoalPage />}/>
            <Route path='/rests' element={<StoresPage />} />
            <Route path='/search' element={<CategoriesPage foods={foods}/>} />
            <Route path='/first' element={<FirstFoodsPage foods={foods}/>} />
            <Route path='/foodinfo' element={<FoodInfoPage />} />
            <Route path='/second' element={<SecondFoodsPage />} />
            <Route path='/result' element={<ResultPage />} />
          </Routes>
        </HashRouter>
      </CookiesProvider>
    </ThemeProvider>
  );
}
