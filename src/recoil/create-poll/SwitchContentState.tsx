import { atom } from 'recoil';

export interface states {
  description: boolean;
  answer: boolean;
  setting: boolean;
}

export const SwitchContentState = atom({
  key: 'SWITCH_CONTENT_STATE_CREATE_A_POLL',
  default: {
    description: true,
    answer: false,
    setting: false,
  },
});

export const nextState = (currentState: states) => {
  if (currentState.description === true)
    return {
      description: false,
      answer: true,
      setting: false,
    };
  else if (currentState.answer === true)
    return {
      description: false,
      answer: false,
      setting: true,
    };
  else return currentState;
};
