import {
  faBasketballBall,
  faHandHoldingUsd,
  faChartLine,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons'

const NY_TIMES_QUERY_MAP = {
  '1111': 'Sports',
  '2222': 'Politics',
  '3333': 'Small Business',
  '4444': 'Business',
}
const NY_TIMES_ID_TO_NAME = {
  '1111': 'Sports',
  '2222': 'Politics',
  '3333': 'Investments',
  '4444': 'Business',
}

const NAME_TO_ICON = {
  Sports: faBasketballBall,
  Politics: faLandmark,
  Investments: faHandHoldingUsd,
  Business: faChartLine,
}

export { NY_TIMES_QUERY_MAP, NY_TIMES_ID_TO_NAME, NAME_TO_ICON }
