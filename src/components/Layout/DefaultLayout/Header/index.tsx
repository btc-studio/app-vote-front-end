import { IoPizza, IoWallet, IoChevronDownOutline } from 'react-icons/io5';
import { login, logout } from '../../../../near/utils';

function Header() {
  return (
    <header className="w-[100%] h-[64px] border-b-[1px] border-[rgba(255,255,255,0.4)] flex justify-center ">
      <div className="h-[100%] w-[1085px]  flex items-center justify-between">
        {/* logo */}
        <div className="w-[102px] flex items-center justify-start relative">
          <IoPizza className="text-[20px] absolute left-0" />
          <p className="text-[18px] absolute left-4">ote Me</p>
        </div>
        {/* login */}
        {!window.walletConnection.isSignedIn() ? (
          <div className="h-[40px] flex items-center">
            <button onClick={login} className="w-[150px] h-[100%] font-semibold cursor-pointer hover:opacity-[0.8] ">
              Sign In
            </button>
            <button className="w-[150px] h-[100%] rounded-full font-semibold bg-[rgba(208,208,208,0.8)] cursor-pointer text-[#0d99ff] hover:opacity-[0.8] ">
              Sign Up
            </button>
          </div>
        ) : (
          <div
            className="min-w-[200px] h-[40px] flex items-center justify-around rounded-full bg-[#ccc] cursor-pointer"
            onClick={logout}
          >
            <IoWallet />
            <p>{window.accountId}</p>
            <IoChevronDownOutline />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
