import { atom } from 'recoil';
import { UserInfoModel } from '../Model/User';
const initUserInfo: UserInfoModel = { id: null, name: null, email: null, role: null };
export const UserInfo = atom({
  key: 'USER_INFO',
  default: initUserInfo,
});

export const IsMemberState = atom({
  key: 'isMember',
  default: false,
});
