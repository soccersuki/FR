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
    queries: ['おにぎり'],
  },
  {
    text: '寿司',
    icon: faFishFins,
    queries: ['寿司'],
  },
  {
    text: '丼もの',
    icon: faBowlFood,
    queries: ['丼'],
  },
  {
    text: 'ステーキ',
    icon: faCow,
    queries: ['ステーキ'],
  },
  {
    text: 'ラーメン',
    icon: faDragon,
    queries: ['ラーメン'],
  },
  {
    text: 'カレー',
    icon: faMosque,
    queries: ['カレー'],
  },
  {
    text: '中華',
    icon: faStar,
    queries: ['中華'],
  },
  {
    text: 'パン',
    icon: faBreadSlice,
    queries: ['パン'],
  },
  {
    text: 'サラダ',
    icon: faSeedling,
    queries: ['サラダ'],
  },
  {
    text: 'たんぱく質多め',
    icon: faP,
    queries: ['サラダチキン']
  },
]

export default categoriesData;
