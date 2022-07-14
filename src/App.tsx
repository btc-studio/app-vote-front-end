import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from './pages/Trending';
import CreatePoll from './pages/CreatePoll';
import DefaultLayout from './components/Layout/DefaultLayout';
import CreateOptions from './pages/CreateOptions';
import Organization from './pages/Organization';
import CreateCriteria from './pages/CreateCriteria';
import { useEffect } from 'react';
import { getAllCriterias, CriteriasCall } from './recoil/create-criterias/CriteriaStates';
import { getAllOptions, OptionsCall } from './recoil/create-options/OptionsState';
import { PollsCall, getAllPolls } from './recoil/create-poll/PollsState';
import { useSetRecoilState } from 'recoil';
import { UserInfo, getAllUsers, ListUsers } from './recoil/users/UserInfo';

const App: React.FC = () => {
  const setCriteriasCall = useSetRecoilState(CriteriasCall);
  const setOptions = useSetRecoilState(OptionsCall);
  const setPolls = useSetRecoilState(PollsCall);
  const setUserInfo = useSetRecoilState(UserInfo);
  const setListUsers = useSetRecoilState(ListUsers);

  // Get all criterias, options, info of user logined
  useEffect(() => {
    const getPolls = async () => {
      const allCriterias = await getAllCriterias();
      setCriteriasCall(allCriterias);
      const allOptions = await getAllOptions();
      setOptions(allOptions);
      const allPolls = await getAllPolls();
      setPolls(allPolls);
      // console.log(allPolls);

      const allUsers = await getAllUsers();
      setListUsers(allUsers);
      // await window.contract.create_user({
      //   args: {
      //     name: 'Duong NH',
      //     role: 'Admin',
      //     email: 'test@gmail.com',
      //     blockchain_type: 'Near',
      //     wallet_address: 'duongnh.testnet',
      //   },
      //   gas: '300000000000000', // attached GAS (optional)
      //   amount: '100000000000000000000000', // attached deposit in yoctoNEAR (optional)
      // });
    };
    const getUserInfo = async (accountId: String) => {
      const userData = await window.contract.get_user_by_wallet_address({ wallet_address: accountId });
      setUserInfo({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        role: userData.role,
      });
    };
    if (window.accountId) {
      getUserInfo(window.accountId);
    }
    getPolls();
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Trending />
              </DefaultLayout>
            }
          />
          <Route
            path="/createpoll"
            element={
              <DefaultLayout>
                <CreatePoll />
              </DefaultLayout>
            }
          />
          <Route
            path="/createCriteria"
            element={
              <DefaultLayout>
                <CreateCriteria />
              </DefaultLayout>
            }
          />
          <Route
            path="/createOptions"
            element={
              <DefaultLayout>
                <CreateOptions />
              </DefaultLayout>
            }
          />
          <Route path="/organization" element={<Organization />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
