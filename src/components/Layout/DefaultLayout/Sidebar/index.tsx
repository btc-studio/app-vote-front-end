import { BsStars, BsLightningChargeFill } from 'react-icons/bs';
import { IoBeer, IoIceCream, IoPeople, IoPaperPlane } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { login } from '../../../../near/utils';
import { UserInfo } from '../../../../recoil/users/UserInfo';
import { useRecoilValue } from 'recoil';
function Sidebar() {
  const userInfo = useRecoilValue(UserInfo);

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
        {userInfo.role === 'Admin' && (
          <>
            <Link
              to={'/createpoll'}
              className={`flex items-center mb-[20px] font-bold text-[20px] ${
                window.location.pathname === '/createpoll' ? 'text-[#fff]' : 'text-[rgba(255,255,255,0.6)]'
              }`}
            >
              <IoBeer className="mr-[8px] text-[32px]" /> Create a poll
            </Link>
            <Link
              to={'/createCriteria'}
              className={`flex items-center mb-[20px] font-bold text-[20px] ${
                window.location.pathname === '/createCriteria' ? 'text-[#fff]' : 'text-[rgba(255,255,255,0.6)]'
              }`}
            >
              <IoPaperPlane className="mr-[8px] text-[32px]" /> Create criterias
            </Link>
            <Link
              to={'/createOptions'}
              className={`flex items-center mb-[20px] font-bold text-[20px] ${
                window.location.pathname === '/createOptions' ? 'text-[#fff]' : 'text-[rgba(255,255,255,0.6)]'
              }`}
            >
              <IoPeople className="mr-[8px] text-[32px]" /> Create options
            </Link>
          </>
        )}
      </>
      {!window.walletConnection.isSignedIn() || !userInfo.role ? (
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
            to={'/organization'}
            className={`flex items-center mb-[20px] font-bold text-[20px] ${
              window.location.pathname === '/organization' ? 'text-[#fff]' : 'text-[rgba(255,255,255,0.6)]'
            }`}
          >
            <IoIceCream className="mr-[8px] text-[32px]" />
            Organization
          </Link>
        </>
      )}
    </div>
  );
}

export default Sidebar;
