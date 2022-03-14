import logo from './logo.svg';
import './App.css';

import Box from '@mui/material/Box';
import CustomizedInputBase from './MyInput'

import MyPieChart from './MyPieChart'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";

import FolderList from './FolderList'

import foods from './foods_lawson.json'

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
        <Route path='/' element={<FirstFoods />} />
        <Route path='/second' element={<SecondFoods />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
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
    <>
    <MyPieChart />
    <Box sx={{width: '100%'}}>
      <Box sx={{m: 2}}>
        <CustomizedInputBase />
      </Box>
    </Box>
    <FolderList foods={foods} handleClick={handleClick} />
    </>
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

  const listItems = foods2.map((food, i) =>
    <li onClick={() => handleClick(i)}>
      {food[0]}, {food[3]}, {food[6]}, {food[4]}, {food[5]}
    </li>
  );
  return (
    <div>
      {food1[0]}, {food1[3]}, {food1[6]}, {food1[4]}, {food1[5]}
      <FolderList foods={foods2} handleClick={handleClick} />
    </div>
  );
}

function Result(){
  const location = useLocation()

  const {food1, food2} = location.state

  const sum = ['合計', , , food1[3] + food2[3], food1[4] + food2[4], food1[5] + food2[5], food1[6] + food2[6]]

  const per1 = per(food1[3], food1[6], food1[4], food1[5])
  const per2 = per(food2[3], food2[6], food2[4], food2[5])
  const per3 = per(sum[3], sum[6], sum[4], sum[5])

  return(
    <div>
      {food1[0]}, {food1[3]}, {food1[6]}({per1[0]}), {food1[4]}({per1[1]}), {food1[5]}({per1[2]})<br />
      {food2[0]}, {food2[3]}, {food2[6]}({per2[0]}), {food2[4]}({per2[1]}), {food2[5]}({per2[2]})<br />
      {sum[0]}, {sum[3]}, {sum[6]}({per3[0]}), {sum[4]}({per3[1]}), {sum[5]}({per3[2]})<br />
    </div>
  )
}

function per(e, p, f, c){
  return [Math.round(p * 4 / e * 100), Math.round(f * 9 / e * 100), Math.round(c * 4 / e * 100)]
}


export default App;
