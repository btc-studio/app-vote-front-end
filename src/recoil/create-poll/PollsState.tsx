import { atom } from 'recoil';
import { PollModel, OptionModel } from '../../Model/Poll';

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
  end_at: 0,
};

export const Poll = atom({
  key: 'POLL',
  default: initialPollsState,
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
