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
    // BE API
    let allCriterias = await fetch('http://api.app-vote.ai-studio-work.net/v1/criterias');
    let data = await allCriterias.json();

    // NEAR API
    // const allCriterias = await window.contract.get_all_criterias();
    return data.criterias;
  } catch (error) {
    console.warn('Error axios: ', error);
  }
};
