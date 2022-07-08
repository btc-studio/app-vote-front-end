import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from './pages/Trending';
import CreatePoll from './pages/CreatePoll';
import DefaultLayout from './components/Layout/DefaultLayout';
import YourPolls from './pages/YourPolls';
import Organization from './pages/Organization';
import CreateCriteria from './pages/CreateCriteria';
import { useEffect } from 'react';
import { getAllCriterias, CriteriasCall } from './recoil/create-criterias/CriteriaStates';
import { getAllOptions, OptionsCall } from './recoil/create-options/OptionsState';
import { useRecoilState } from 'recoil';
import { UserInfo } from './recoil/UserInfo';

const App: React.FC = () => {
  const [criteriasCall, setCriteriasCall] = useRecoilState(CriteriasCall);
  const [options, setOptions] = useRecoilState(OptionsCall);
  const [userInfo, setUserInfo] = useRecoilState(UserInfo);

  // Get all criterias, options, info of user logined
  useEffect(() => {
    const getCriterias = async () => {
      const allCriterias = await getAllCriterias();
      setCriteriasCall(allCriterias);
    };
    const getOptions = async () => {
      const allOptions = await getAllOptions();
      setOptions(allOptions);
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
    const getPoll = async () => {
      const polls = await window.contract.get_all_polls();
    };
    if (window.accountId) {
      getUserInfo('duongnh.testnet');
    }
    getOptions();
    getCriterias();
    getPoll();
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
            path="/yourpolls"
            element={
              <DefaultLayout>
                <YourPolls />
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
