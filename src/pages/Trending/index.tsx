import { IoRocket, IoPizza, IoShieldCheckmark, IoMegaphone } from 'react-icons/io5';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import people from '../../assets/images/people.svg';
import { HomeDescription } from './TrendingStates/HomeDescription';
import { HomeResult } from './TrendingStates/HomeResult';
import { HomeVote } from './TrendingStates/HomeVote';
import { HomeUserState } from '../../recoil/HomeUserState';
import api from '../../utils/request';
function Trending() {
  const [HomeState, setHomeState] = useRecoilState(HomeUserState);
  const getUser = async () => {
    const listUser = await api.get('/users');
    console.log(listUser.data);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="min-w-[669px] min-h-[754px] p-[34px] ">
      <div className="min-w-[229px] h-[75px] flex items-center ">
        <div className="w-[75px] h-[75px] bg-[#fff]  mr-[14px] rounded-full flex justify-center items-center relative overflow-hidden">
          <img className="absolute bottom-0" src={people} alt="people" />
        </div>
        <p className="text-[24px] font-semibold ">BTC Studio</p>
      </div>

      <div className="flex min-w-[434px]  h-[100%] mt-[33px] ">
        <div className="w-[65%] h-[100%] bg-[rgba(255,255,255,0.2)] px-[30px] py-[20px] rounded-[16px]">
          <h1 className="flex items-center text-[24px] font-semibold mb-[20px]">
            <IoRocket className="text-[32px] mr-[10px]" /> Bình chọn MVP tháng 6
          </h1>
          {/* content vote */}
          {HomeState === 'description' && <HomeDescription />}
          {HomeState === 'vote' && <HomeVote />}
          {HomeState === 'result' && <HomeResult />}
          <hr className="w-[100%] border-[rgba(255,255,255,0.4)] my-[18px] " />
          {/* vote Footer */}
          <div className="flex w-[100%]  justify-center items-center">
            <div className="min-w-[96px] min-h-[40px] flex items-center p-[4px] text-[14px] bg-[rgba(255,255,255,0.2)] rounded-md">
              <button
                className={`min-w-[88px] min-h-[32px]  mr-[4px] rounded-[6px] ${
                  HomeState === 'description' ? 'bg-[rgba(255,255,255,0.4)]' : 'text-[rgba(255,255,255,0.4)]'
                }`}
                onClick={() => setHomeState('description')}
              >
                Description
              </button>
              <button
                className={`min-w-[88px] min-h-[32px]  rounded-[6px] flex items-center justify-center ${
                  HomeState !== 'description' ? 'bg-[rgba(255,255,255,0.4)]' : 'text-[rgba(255,255,255,0.4)]'
                } `}
                onClick={() => setHomeState('vote')}
              >
                <IoPizza className="mr-[4px]" /> Vote
              </button>
            </div>
          </div>
        </div>
        {/* Extra info */}
        <div className="flex-[1] h-[100%] pl-[20px]">
          <div className="text-[16px] font-[400] py-[20px] min-w-[200px] text-[rgba(255,255,225,0.4)]">
            <p className="flex items-center mb-[28px]">
              <IoShieldCheckmark className="text-[#11DBC5] text-[24px] mr-[6px]" />
              trust in NEAR Blockchain
            </p>
            <p className="flex items-center mb-[28px]">
              <IoPizza className="text-[rgba(255,255,255,0.8)] text-[24px] mr-[6px]" />
              20 users has voted
            </p>
            <div>
              <p className="flex items-center">
                <IoMegaphone className="text-[rgba(255,255,255,0.8)] text-[24px] mr-[6px]" />
                quick view result
              </p>
              <div className="ml-[30px] mt-[13px]">
                <p>#1 Nam Bùi</p>
                <p>#2 Dưỡng HB</p>
                <p>#3 Đỗ Thị Hồng Thảo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
