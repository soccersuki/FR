import './App.css';
import {useState, } from 'react'

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

import foodsRaw from './foods_lawson.json'

const theme = createTheme({
  palette: {
    secondary: {
      main: pink[200],
      contrastText: '#fff',
    }
  },
  typography: {
    body1: {
      color: grey[700],
      letterSpacing: 1,
    }
  }
})

export default function App() {
  const [id, setId] = useState(-1);
  const [food1, setFood1] = useState(null);
  const [food2, setFood2] = useState(null);
  const [foods1, setFoods1] = useState([]);
  const [foods2, setFoods2] = useState([]);
  const [goal, setGoal] = useState(null);
  const [foods, setFoods] = useState(foodsRaw);

  const handleClick = () => {
    setId(id + 1);
  }

  const pages = [
    <GoalPage handleClick={handleClick} setGoal={setGoal} foods={foods} setFoods={setFoods}/>,
    <StoresPage handleClick={handleClick}/>,
    <CategoriesPage foods={foods} setFoods1={setFoods1} handleClick={handleClick}/>,
    <FirstFoodsPage foods={foods} foods1={foods1} setFood1={setFood1} setFoods2={setFoods2} goal={goal} handleClick={handleClick}/>,
    <SecondFoodsPage foods2={foods2} setFood2={setFood2} goal={goal} handleClick={handleClick}/>,
    <ResultPage food1={food1} food2={food2} goal={goal} handleClick={handleClick}/>,
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
