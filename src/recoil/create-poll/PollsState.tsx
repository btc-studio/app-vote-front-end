import { atom } from 'recoil';
import { PollModel } from '../../Model/Poll';

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
