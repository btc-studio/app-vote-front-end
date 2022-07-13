import { IoRocket, IoPizza, IoShieldCheckmark, IoMegaphone } from 'react-icons/io5';
import { useEffect, useState } from 'react';

import people from '../../assets/images/people.svg';
import { HomeDescription } from './TrendingStates/HomeDescription';
import { HomeResult } from './TrendingStates/HomeResult';
import { HomeVote } from './TrendingStates/HomeVote';
import { useRecoilValue } from 'recoil';
import { listPolls } from '../../recoil/trending/AllPoll';

interface Props {
  pollInfo: any;
  // optionId: number;
}
function Poll(props: Props) {
  const { pollInfo } = props;
  const [homeState, setHomeState] = useState('description');
  //get Id poll isVoted from localStorage
  const storageIdVoted = localStorage.getItem('IdPollIsVoted');
  const localStorageIsVoted = JSON.parse(storageIdVoted as string);
  const [isVoted, setIsVoted] = useState<number[]>(localStorageIsVoted || []);

  const HandleSetHomeState = (state: string) => {
    setHomeState(state);
  };
  const checkIsVoted = (id: number) => {
    let voted = isVoted.some((item) => item === id);

    return voted;
  };

  return (
    <div className="mb-[5rem] ">
      <div className="min-w-[229px] h-[75px] flex items-center ">
        <div className="w-[75px] h-[75px] bg-[#fff]  mr-[14px] rounded-full flex justify-center items-center relative overflow-hidden">
          <img className="absolute bottom-0" src={people} alt="people" />
        </div>
        <p className="text-[24px] font-semibold ">BTC Studio</p>
      </div>

      <div className="flex min-w-[434px]  h-[100%] mt-[33px] ">
        <div className="w-[65%] h-[100%] bg-[rgba(255,255,255,0.2)] px-[30px] py-[20px] rounded-[16px]">
          <h1 className="flex items-center text-[24px] font-semibold mb-[20px]">
            <IoRocket className="text-[32px] mr-[10px]" /> {pollInfo.title}
          </h1>
          {/* content vote */}

          {checkIsVoted(pollInfo.id) ? (
            <HomeResult criteriaIds={pollInfo.criteria_ids} />
          ) : (
            <>
              {homeState === 'description' && (
                <HomeDescription pollDescription={pollInfo.description} criteriaIds={pollInfo.criteria_ids} />
              )}
              {homeState === 'vote' && (
                <HomeVote
                  pollId={pollInfo.id}
                  optionId={pollInfo.poll_option_id}
                  criteriaIds={pollInfo.criteria_ids}
                  setHomeState={setHomeState}
                  isVoted={isVoted}
                  setIsVoted={setIsVoted}
                />
              )}
            </>
          )}

          <hr className="w-[100%] border-[rgba(255,255,255,0.4)] my-[18px] " />
          {/* vote Footer */}
          <div className="flex w-[100%]  justify-center items-center">
            <div className="min-w-[96px] min-h-[40px] flex items-center p-[4px] text-[14px] bg-[rgba(255,255,255,0.2)] rounded-md">
              <button
                disabled={checkIsVoted(pollInfo.id)}
                className={`min-w-[88px] min-h-[32px]  mr-[4px] rounded-[6px] ${
                  homeState === 'description' ? 'bg-[rgba(255,255,255,0.4)]' : 'text-[rgba(255,255,255,0.4)]'
                }`}
                onClick={() => HandleSetHomeState('description')}
              >
                Description
              </button>
              <button
                disabled={!window.walletConnection.isSignedIn() || checkIsVoted(pollInfo.id)}
                className={`min-w-[88px] min-h-[32px]  rounded-[6px] flex items-center justify-center ${
                  homeState !== 'description' ? 'bg-[rgba(255,255,255,0.4)]' : 'text-[rgba(255,255,255,0.4)]'
                } `}
                onClick={() => HandleSetHomeState('vote')}
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

export default Poll;
