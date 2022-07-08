import { atom } from 'recoil';
import { PollModel } from '../../Model/Poll';
export const SwitchContentCreatePoll = atom({
  key: 'SWITCH_CONTENT_CREATE_POLL',
  default: {
    description: true,
    answer: false,
    setting: false,
  },
});

const initialPollsState: PollModel = {
  title: undefined,
  description: undefined,
  end_at: 0,
  criteria_ids: [],
};

export const Poll = atom({
  key: 'POLL',
  default: initialPollsState,
});
