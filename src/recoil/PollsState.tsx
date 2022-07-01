import { atom } from 'recoil';

export const SwitchContentCreatePoll = atom({
  key: 'SWITCH_CONTENT_CREATE_POLL',
  default: {
    description: true,
    answer: false,
    setting: false,
  },
});

export const Poll = atom({
  key: 'POLL',
  default: {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    endHours: '',
  },
});

export const Criterias = atom({
  key: 'CRITERIAS',
  default: new Array<any>(),
});

export const Options = atom({
  key: 'OPTIONS',
  default: [
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
  ],
});
