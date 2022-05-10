import './App.css';
import {useState, } from 'react'

import {pink, grey} from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {MobileStepper, Button} from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


import TopPage from './Pages/TopPage'
import GoalPage from './Pages/GoalPage'
import StoresPage from './Pages/StoresPage'
import CategoriesPage from './Pages/CategoriesPage'
import FirstFoodsPage from './Pages/FirstFoodsPage'
import SecondFoodsPage from './Pages/SecondFoodsPage'
import ResultPage from './Pages/ResultPage'

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
  const [store, setStore] = useState(null);
  const [foods, setFoods] = useState(null);

  const handleClick = () => {
    setId(id + 1);
  }

  const pages = [
    <GoalPage handleClick={handleClick} setGoal={setGoal}/>,
    <StoresPage handleClick={handleClick} setStore={setStore}/>,
    <CategoriesPage setFoods={setFoods} goal={goal} store={store} setFoods1={setFoods1} handleClick={handleClick}/>,
    <FirstFoodsPage foods={foods} foods1={foods1} setFood1={setFood1} setFoods2={setFoods2} goal={goal} handleClick={handleClick}/>,
    <SecondFoodsPage foods2={foods2} setFood2={setFood2} goal={goal} handleClick={handleClick}/>,
    <ResultPage food1={food1} food2={food2} goal={goal}handleClick={() => setId(0)}/>,
  ];

  return (
    <ThemeProvider theme={theme}>
      {id === -1 ?
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

function ProgressMobileStepper(props) {
  const handleBack = () => {
    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      LinearProgressProps={{color: "secondary"}}
      color="secondary"
      variant="progress"
      steps={6}
      position="static"
      activeStep={props.activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button sx={{visibility:'hidden'}}color="secondary"size="small" disabled>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button color="secondary"size="small" onClick={handleBack}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
}
