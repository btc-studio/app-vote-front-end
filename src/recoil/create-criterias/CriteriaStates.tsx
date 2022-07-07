import { atom } from 'recoil';
import axios from 'axios';
import { CriteriaModel } from '../../Model/Poll';

const initialCriteriasState: CriteriaModel[] = [];
export const Criterias = atom({
  key: 'CRITERIAS',
  default: initialCriteriasState,
});

const initialCriteriasCallState: CriteriaModel[] = [];
export const CriteriasCall = atom({
  key: 'CRITERIAS_CALL',
  default: initialCriteriasCallState,
});

export const getAllCriterias = async () => {
  try {
    const allCriterias = await axios.get('http://api.app-vote.ai-studio-work.net/v1/criterias');
    return allCriterias.data.criterias;
  } catch (error) {
    alert(error);
  }
};
