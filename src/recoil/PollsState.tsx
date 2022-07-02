import { atom } from 'recoil';
import { PollModel, OptionModel, CriteriaModel } from '../Model/Poll';

export const SwitchContentCreatePoll = atom({
  key: 'SWITCH_CONTENT_CREATE_POLL',
  default: {
    description: true,
    answer: false,
    setting: false,
  },
});

const initialPollsState: PollModel = {
  title: '',
  description: '',
  endAt: '',
};

export const Poll = atom({
  key: 'POLL',
  default: initialPollsState,
});

const initialCriteriasState: CriteriaModel[] = [];
export const Criterias = atom({
  key: 'CRITERIAS',
  default: initialCriteriasState,
});

const initialOptionsState: OptionModel[] = [
  {
    title: 'BTC Studio employees',
    description: 'Nhân viên BTC Studio ngoại trừ BOD',
  },
  {
    title: 'Các sếp',
    description: 'Các sếp',
  },
  {
    title: 'BTC Studio ',
    description: 'Nhân viên BTC Studio',
  },
  {
    title: 'Developer',
    description: 'Developer của BTC Studio',
  },
];
export const Options = atom({
  key: 'OPTIONS',
  default: initialOptionsState,
});
