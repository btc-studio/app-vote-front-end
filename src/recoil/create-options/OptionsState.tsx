import { atom } from 'recoil';
import { OptionModel } from '../../Model/Poll';
import request from '../../utils/request';
const initialOptionsState: OptionModel[] = [];
export const OptionsCall = atom({
  key: 'OPTIONS',
  default: initialOptionsState,
});

export const getAllOptions = async () => {
  try {
    // BE API
    const options = await request.get('options');
    return options.data.data;
    // NEAR API
    // const options = await window.contract.get_all_poll_options();
    // return options;
  } catch (error) {
    console.log('Error options axios: ', error);
  }
};
