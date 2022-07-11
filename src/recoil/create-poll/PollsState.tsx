import { atom } from 'recoil';
import { PollModel } from '../../Model/Poll';
import request from '../../utils/request';

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
export const getAllPolls = async () => {
  try {
    // BE API
    const polls = await request.get('/polls');
    // NEAR API
    // const allCriterias = await window.contract.get_all_polls();
    return polls.data.data;
  } catch (error) {
    console.log('Error options axios: ', error);
  }
};
