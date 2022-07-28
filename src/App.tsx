import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from './pages/Trending';
import CreatePoll from './pages/CreatePoll';
import DefaultLayout from './components/Layout/DefaultLayout';
import OnlyHeader from './components/Layout/OnlyHeader';
import CreateOptions from './pages/CreateOptions';
import Organization from './pages/Organization';
import CreateCriteria from './pages/CreateCriteria';
import { useEffect } from 'react';
import { getAllCriterias, CriteriasCall } from './recoil/create-criterias/CriteriaStates';
import { getAllOptions, OptionsCall } from './recoil/create-options/OptionsState';
import { PollsCall, getAllPolls } from './recoil/create-poll/PollsState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserInfo, getAllUsers, ListUsers, IsMemberState } from './recoil/users/UserInfo';
import Error from './pages/Error';
import { log } from 'console';

const App: React.FC = () => {
  const setCriteriasCall = useSetRecoilState(CriteriasCall);
  const setOptions = useSetRecoilState(OptionsCall);
  const setPolls = useSetRecoilState(PollsCall);
  const [userInfo, setUserInfo] = useRecoilState(UserInfo);
  const setListUsers = useSetRecoilState(ListUsers);
  const [isMember, setIsMember] = useRecoilState(IsMemberState);
  // Get all criterias, options, info of user logined
  useEffect(() => {
    const getPolls = async () => {
      const allCriterias = await getAllCriterias();
      setCriteriasCall(
        allCriterias.sort((a: any, b: any) => {
          return b.created_at - a.created_at;
        }),
      );
      const allOptions = await getAllOptions();
      setOptions(
        allOptions.sort((a: any, b: any) => {
          return b.created_at - a.created_at;
        }),
      );
      const allPolls = await getAllPolls();
      setPolls(
        allPolls.sort((a: any, b: any) => {
          return b.end_at - a.end_at;
        }),
      );
      const allUsers = await getAllUsers();

      const newAllUsers = allUsers.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          walletAddress: user.user_wallet.wallet_address,
        };
      });
      setListUsers(newAllUsers);
    };
    const getUserInfo = async (accountId: String) => {
      const userData = await window.contract.get_user_by_wallet_address({ wallet_address: accountId });
      if (userData) {
        setUserInfo({
          id: userData.id,
          name: userData.name,
          email: userData.email,
          role: userData.role,
          walletAddress: userData.user_wallet.wallet_address,
        });
        setIsMember(true);
      }
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
          {userInfo.role === 'Admin' && (
            <>
              <Route
                path="/create-poll"
                element={
                  <DefaultLayout>
                    <CreatePoll />
                  </DefaultLayout>
                }
              />
              <Route
                path="/create-criteria"
                element={
                  <DefaultLayout>
                    <CreateCriteria create={true} list={false} />
                  </DefaultLayout>
                }
              />
              <Route
                path="/all-criterias"
                element={
                  <DefaultLayout>
                    <CreateCriteria create={false} list={true} />
                  </DefaultLayout>
                }
              />
              <Route
                path="/create-options"
                element={
                  <DefaultLayout>
                    <CreateOptions create={true} list={false} />
                  </DefaultLayout>
                }
              />
              <Route
                path="/all-options"
                element={
                  <DefaultLayout>
                    <CreateOptions create={false} list={true} />
                  </DefaultLayout>
                }
              />
            </>
          )}
          {isMember && <Route path="/organization" element={<Organization />} />}
          <Route
            path="/:somestring"
            element={
              <OnlyHeader>
                <Error />
              </OnlyHeader>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
