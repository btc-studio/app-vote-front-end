import { atom } from 'recoil';

interface PollItem {
  number: Number;
  title: string;
}

export const SwitchContentState = atom({
  key: 'SWITCH_CONTENT_STATE_CREATE_POLL',
  default: {
    description: true,
    answer: false,
    setting: false,
  },
});

export const PollData = atom({
  key: 'POLL_DATA',
  default: {
    title: '',
  },
});

export const PollList = atom({
  key: 'POLL_LIST',
  default: { listPoll: Array<PollItem>, total: 0 },
});
