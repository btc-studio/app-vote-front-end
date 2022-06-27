import { BsStars, BsLightningChargeFill } from 'react-icons/bs';
import { IoBeer, IoIceCream, IoFastFood } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { login } from '../../../../near/utils';
function Sidebar() {
  return (
    <div className="w-[199px] min-h-[200px]">
      <>
        <Link to={'/'} className="flex items-center mb-[10px] font-semibold ">
          <BsStars className="mr-[8px] text-[20px]" /> Trending
        </Link>
        <Link to={'/createpoll'} className="flex items-center mb-[10px] font-semibold">
          <IoBeer className="mr-[8px] text-[20px]" /> Create a poll
        </Link>
      </>
      {!window.walletConnection.isSignedIn() ? (
        <>
          <hr className="w-[80%] my-[16px] border-[rgba(255,255,255,0.4)]" />
          <button
            className="min-w-[120px] h-[30px] px-[15px] border-[1px] border-[#0d99ff] text-[14px] text-[#0d99ff] flex items-center justify-center rounded-md hover:opacity-[0.8]"
            onClick={login}
          >
            <BsLightningChargeFill className="mr-[6px]" /> Become User
          </button>
        </>
      ) : (
        <>
          <Link to={'/yourpolls'} className="flex items-center mb-[10px] font-semibold">
            <IoFastFood className="mr-[8px] text-[20px]" />
            Your polls
          </Link>
          <Link to={'/organization'} className="flex items-center mb-[10px] font-semibold">
            <IoIceCream className="mr-[8px] text-[20px]" />
            Organization
          </Link>
        </>
      )}
    </div>
  );
}

export default Sidebar;
