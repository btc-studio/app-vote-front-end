import { BsStars, BsLightningChargeFill } from 'react-icons/bs';
import { IoBeer, IoIceCream, IoFastFood } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { login } from '../../../../near/utils';
function Sidebar() {
  return (
    <div className="w-[199px] min-h-[200px]">
      <>
        <Link
          to={'/'}
          className={`flex items-center mb-[20px] font-bold text-[20px] ${
            window.location.pathname === '/' ? 'text-[#fff]' : 'text-[rgba(255,255,255,0.6)]'
          }`}
        >
          <BsStars className="mr-[8px] text-[32px]" /> Trending
        </Link>
        <Link
          to={'/createpoll'}
          className={`flex items-center mb-[20px] font-bold text-[20px] ${
            window.location.pathname === '/createpoll' ? 'text-[#fff]' : 'text-[rgba(255,255,255,0.6)]'
          }`}
        >
          <IoBeer className="mr-[8px] text-[32px]" /> Create a poll
        </Link>
      </>
      {!window.walletConnection.isSignedIn() ? (
        <>
          <hr className="w-[80%] my-[32px] border-[rgba(255,255,255,0.4)] " />
          <button
            className="min-w-[120px] h-[30px] px-[17px] border-[1px] border-[#0EA5E9] text-[14px] text-[#0EA5E9] flex items-center justify-center rounded-md hover:opacity-[0.8]"
            onClick={login}
          >
            <BsLightningChargeFill className="mr-[6px]" /> Become User
          </button>
          <p className="text-[10px] text-[rgba(255,255,255,0.6)] my-[8px]">It’s Free Now</p>
        </>
      ) : (
        <>
          <Link
            to={'/yourpolls'}
            className={`flex items-center mb-[20px] font-bold text-[20px] ${
              window.location.pathname === '/yourpolls' ? 'text-[#fff]' : 'text-[rgba(255,255,255,0.6)]'
            }`}
          >
            <IoFastFood className="mr-[8px] text-[32px]" />
            Your polls
          </Link>
          <Link
            to={'/organization'}
            className={`flex items-center mb-[20px] font-bold text-[20px] ${
              window.location.pathname === '/organization' ? 'text-[#fff]' : 'text-[rgba(255,255,255,0.6)]'
            }`}
          >
            <IoIceCream className="mr-[8px] text-[32px]" />
            Organization
          </Link>
          <Link
            to={'/test-create-poll'}
            className={`flex items-center mb-[20px] font-bold text-[20px] ${
              window.location.pathname === '/test-create-poll' ? 'text-[#fff]' : 'text-[rgba(255,255,255,0.6)]'
            }`}
          >
            <BsStars className="mr-[8px] text-[32px]" /> Test Create Poll
          </Link>
        </>
      )}
    </div>
  );
}

export default Sidebar;
