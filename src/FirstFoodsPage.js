import Page from './Page'
import FoodsPage from './FoodsPage'
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone';


export default function FirstFoodsPage(props) {
  const {foods} = props;

  const handleClickNext = (food1) => {
    const [,,,e, f, c, p] = food1

    const foods2 = foods.filter((food) => {
      const [,,,e2, f2, c2, p2] = food

      var ok = e + e2 > props.goal.e * 0.8 && e + e2 < props.goal.e * 1.2
      ok = ok && p + p2 > (e + e2) * props.goal.pfc[0] / 100 * 0.8 / 4 && p + p2 < (e + e2) * props.goal.pfc[0] / 100 * 1.2 / 4
      ok = ok && f + f2 > (e + e2) * props.goal.pfc[1] / 100 * 0.8 / 9 && f + f2 < (e + e2) * props.goal.pfc[1] / 100 * 1.2 / 9
      ok = ok && c + c2 > (e + e2) * props.goal.pfc[2] / 100 * 0.8 / 4 && c + c2 < (e + e2) * props.goal.pfc[2] / 100 * 1.2 / 4

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
      <FoodsPage foods={props.foods1} goal={props.goal} handleClickNext={handleClickNext}/>
    </Page>
  )
}
