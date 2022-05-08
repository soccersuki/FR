import Page from './Page'
import FoodsPage from './FoodsPage'
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';

const eI = [1600 / 3, 2250 / 3]
const pI = [0.15, 0.25]
const fI = [0.15, 0.25]
const cI = [0.50, 0.60]


export default function FirstFoodsPage(props) {
  const {foods} = props;

  const handleClickNext = (food1) => {
    const [,,,e, f, c, p] = food1

    const foods2 = foods.filter((food) => {
      const [,,,e2, f2, c2, p2] = food

      var ok = e + e2 > eI[0] && e + e2 < eI[1]
      ok = ok && p + p2 > (e + e2) * pI[0] / 4 && p + p2 < (e + e2) * pI[1] / 4
      ok = ok && f + f2 > (e + e2) * fI[0] / 9 && f + f2 < (e + e2) * fI[1] / 9
      ok = ok && c + c2 > (e + e2) * cI[0] / 4 && c + c2 < (e + e2) * cI[1] / 4

      return ok
    })

    props.setFood1(food1);
    props.setFoods2(foods2);

    setTimeout(() => {
      props.handleClick();
    }, 500)
  }

  return(
    <Page text={'一品目を選んでください'} icon={<SetMealTwoToneIcon sx={{fontSize: 70}} color="secondary"/>}>
      <FoodsPage foods={props.foods1} handleClickNext={handleClickNext}/>
    </Page>
  )
}
