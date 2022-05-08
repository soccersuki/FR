import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite, faFish, faBox, faLeaf, faFutbol, faFishFins, faBowlFood, faCow, faDragon, faMosque, faStar, faBreadSlice, faSeedling, faP} from '@fortawesome/free-solid-svg-icons'

const categoriesData = [
  {
    text: '肉',
    icon: faDrumstickBite,
    queries: ['肉', '牛', '豚', '鶏'],
  },
  {
    text: '魚',
    icon: faFish,
    queries: ['魚', '海'],
  },
  {
    text: '弁当',
    icon: faBox,
    queries: ['弁当']
  },
  {
    text: '野菜',
    icon: faLeaf,
    queries: ['野菜']
  },
  {
    text: 'おにぎり',
    icon: faFutbol,
  },
  {
    text: '寿司',
    icon: faFishFins,
  },
  {
    text: '丼もの',
    icon: faBowlFood,
  },
  {
    text: 'ステーキ',
    icon: faCow,
  },
  {
    text: 'ラーメン',
    icon: faDragon,
  },
  {
    text: 'カレー',
    icon: faMosque,
  },
  {
    text: '中華',
    icon: faStar,
  },
  {
    text: 'パン',
    icon: faBreadSlice,
  },
  {
    text: 'サラダ',
    icon: faSeedling,
  },
  {
    text: 'たんぱく質多め',
    icon: faP,
  },
]

export default categoriesData;
