import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Page from './Page'
import FoodsPage from './FoodsPage'

export default function SecondFoodsPage(props){
  const handleClickNext = (food2) => {
    props.setFood2(food2);
    setTimeout(() => {
      props.handleClick();
    }, 500)
  }
  return(
    <Page text={'二品目を選んでください'} icon={<LocalFireDepartmentIcon sx={{fontSize: 70}} color="secondary"/>}>
      <FoodsPage foods={props.foods2} goal={props.goal} handleClickNext={handleClickNext}/>
    </Page>
  )
}
