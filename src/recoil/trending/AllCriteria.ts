import { atom } from 'recoil';
import { Criteria } from '../../pages/Trending/TrendingStates/HomeDescription';

const intialCriteria: Criteria[] = [];
export const allCriteriaState = atom({
  key: 'AllCriteria',
  default: intialCriteria,
});
