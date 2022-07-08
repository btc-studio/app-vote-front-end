import { atom } from 'recoil';

export const listPolls = atom({
  key: 'listPolls',
  default: [],
});

export const PollInfoState = atom({
  key: 'PollInfo',
  default: [],
});
