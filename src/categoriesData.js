import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite, faFish, faBox, faLeaf, faFutbol, faFishFins, faBowlFood, } from '@fortawesome/free-solid-svg-icons'

const categoriesData = [
  {
    text: '肉',
    queries: ['肉', '牛', '豚', '鶏'],
    icon: faDrumstickBite,
  },
  {
    text: '魚',
    queries: ['魚', '海'],
    icon: faFish,
  },
  {
    text: '弁当',
    icon: faBox,
  },
  {
    text: '野菜',
    icon: faLeaf
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
  },
  {
    text: 'ハンバーグ',
  },
  {
    text: 'ラーメン',
  },
  {
    text: 'パスタ',
  },
  {
    text: 'ドリア',
  },
  {
    text: 'カレー',
  },
  {
    text: '中華',
  },
  {
    text: 'パン',
  },
  {
    text: 'サラダ',
  },
  {
    text: 'たんぱく質多め',
  },
]

export default categoriesData;
