import { atom } from 'recoil';
import { OptionModel } from '../../Model/Poll';
import axios from 'axios';
const initialOptionsState: OptionModel[] = [];
export const OptionsCall = atom({
  key: 'OPTIONS',
  default: initialOptionsState,
});

export const getAllOptions = async () => {
  try {
    // BE API
    const options = await axios.get('http://api.app-vote.ai-studio-work.net/v1/options');
    // NEAR API
    // const allCriterias = await window.contract.get_all_options();
    return options.data.data;
  } catch (error) {
    alert(error);
  }
};
