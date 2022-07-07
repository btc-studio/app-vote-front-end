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
import { useRecoilState } from 'recoil';
const App: React.FC = () => {
  const [criteriasCall, setCriteriasCall] = useRecoilState(CriteriasCall);
  useEffect(() => {
    const getCriterias = async () => {
      const allCriterias = await getAllCriterias();
      setCriteriasCall(allCriterias);
    };
    getCriterias();
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
