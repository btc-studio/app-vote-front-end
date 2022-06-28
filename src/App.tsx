import React from 'react';
import Item from './components/Item/Item';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import BtnGroup from './components/BtnGroup/BtnGroup';
import { login, logout } from './near/utils';
import AnswerCard from './components/AnswerCard/AnswerCard';
import { BsStars } from 'react-icons/bs';
import { IoBeer, IoIceCream, IoFastFood } from 'react-icons/io5';

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
    <div className="bg-primary-100 max-w-screen min-h-screen flex justify-center items-center flex-col pb-8">
      <div className="">
        <Item title="Trending" icon={<BsStars />} active={true} fontSize={true} />
        <Item title="Yours polls" icon={<IoFastFood />} active={false} fontSize={true} />
        <Item title="Create a poll" icon={<IoBeer />} active={false} fontSize={true} />
        <Item title="Organization" icon={<IoIceCream />} active={false} fontSize={false} />
      </div>
      <Modal title="Bình chọn MVP tháng 6" avatar={true} icon={<BsStars />}>
        <Button title="Vote" upcase={true} outline={true} css={'absolute bottom-20 right-8'} active={false} />
        <div className="absolute flex justify-center items-center border-t-[2px] border-primary-50 py-3 bottom-0 w-[363px]">
          <BtnGroup>
            <Button title="Desciption" upcase={false} outline={false} group={true} active={true} />
            <Button title="Anwser" upcase={false} outline={false} group={true} active={false} />
            <Button title="Setting" upcase={false} outline={false} group={true} active={false} />
          </BtnGroup>
          <Button title="Vote" upcase={true} outline={true} css={'ml-8'} active={false} />
        </div>
      </Modal>
      <div className="mt-4 flex mx-2">
        <AnswerCard title="BTC Studio employees" content="Nhân viên BTC studio ngoại trừ BOD" />
        <AnswerCard title="BTC Studio employees" content="Nhân viên BTC studio ngoại trừ BOD" />
        <AnswerCard title="BTC Studio employees" content="Nhân viên BTC studio ngoại trừ BOD" />
      </div>
    </div>
  );
};

export default App;
