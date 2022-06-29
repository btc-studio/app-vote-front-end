import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from './pages/Trending';
import CreatePoll from './pages/CreatePoll';
import DefaultLayout from './components/Layout/DefaultLayout';
import YourPolls from './pages/YourPolls';
import Organization from './pages/Organization';

const App: React.FC = () => {
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
