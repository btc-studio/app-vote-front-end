import React from 'react';
import ListItem from './components/ListItem/ListItem';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import BtnGroup from './components/BtnGroup/BtnGroup';
import { login, logout } from './near/utils';
import AnswerCard from './components/AnswerCard/AnswerCard';

const App: React.FC = () => {
  // if not signed in, return early with sign-in prompt
  // if (!window.walletConnection.isSignedIn()) {
  //   return (
  //     <main>
  //       <h1>Voting app</h1>
  //       <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
  //         <button onClick={login}>Sign in</button>
  //       </p>
  //     </main>
  //   );
  // }
  // return (
  //   // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
  //   <>
  //     <button className="link" style={{ float: 'right' }} onClick={logout}>
  //       Sign out
  //     </button>
  //     <main>
  //       <h1>{window.accountId}</h1>
  //     </main>
  //   </>
  // );
  return (
    <div className="bg-primary-100 w-screen h-screen flex justify-center items-center">
      {/* <ListItem />
      <Modal title="Bình chọn MVP tháng 6">
        <BtnGroup>
          <Button title="Desciption" upcase={false} outline={false} group={true} active={true} />
          <Button title="Anwser" upcase={false} outline={false} group={true} active={false} />
          <Button title="Setting" upcase={false} outline={false} group={true} active={false} />
        </BtnGroup>
      </Modal> */}
      <AnswerCard title="BTC Studio employees" content="Nhân viên BTCS trừ CDO" />
    </div>
  );
};

export default App;
