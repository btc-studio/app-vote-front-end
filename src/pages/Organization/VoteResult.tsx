import { useEffect, useState } from 'react';
import { PollModel } from '../../Model/Poll';
import { ListUsers } from '../../recoil/users/UserInfo';
import { useRecoilValue } from 'recoil';
import { IoRocket } from 'react-icons/io5';
import { getNameUser } from '../../utils/GetUser';
interface props {
  pollId: number;
}
interface userVote {
  userName: string;
  total: number;
}

const VoteResult: React.FC<props> = ({ pollId }) => {
  const [poll, setPoll] = useState<PollModel>();
  const listUsers = useRecoilValue(ListUsers);
  const [listUserVote, setListUserVote] = useState<userVote[]>([]);
  let startAt: string = '';
  let endAt: string = '';
  if ((new Date(poll?.end_at as number).getFullYear() as number) > 1970) {
    endAt = new Date(poll?.end_at as number).toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1 $2');
  }
  if ((new Date(poll?.start_at as number).getFullYear() as number) > 1970) {
    startAt = new Date(poll?.start_at as number).toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1 $2');
  }

  useEffect(() => {
    const getPoll = async () => {
      const pollGet = await window.contract.get_poll_by_id({ poll_id: pollId });
      const result = await window.contract.get_all_results_by_poll_id({ poll_id: pollId });

      const listUserVoteMap = await result.map((item: any) => {
        return {
          userName: getNameUser(item.user_id, listUsers),
          total: item.total_vote,
        };
      });
      setListUserVote(listUserVoteMap);
      setPoll(pollGet);
    };
    getPoll();
  }, []);
  return (
    <div className="mt-4">
      <div className="">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold flex items-center mb-2">
            <IoRocket className="mr-2" />
            {poll?.title}
          </h1>
          <div className="flex ml-40">
            <p className="mr-2">Start: {startAt}</p>
            <p className="ml-2">End: {endAt}</p>
          </div>
        </div>
        <p>{poll?.description}</p>
      </div>
      <div className="mt-4">
        {listUserVote ? (
          listUserVote.map((vote, index) => {
            return (
              <div key={index} className="flex mt-2 items-center">
                {index === 0 ? <div className="px-[2px] bg-green-600 font-bold rounded mr-1">#1</div> : <></>}
                {index === 1 ? <div className="px-[2px] bg-blue-600 font-bold rounded mr-1">#2</div> : <></>}
                {index === 2 ? <div className="px-[2px] bg-orange-600 font-bold rounded mr-1">#3</div> : <></>}
                <h1 className={`mr-4 w-40 ${index > 2 ? 'ml-6' : ''}`}>{vote.userName}</h1>
                <p className="w-20 flex">
                  Total: {vote.total} <IoRocket className="ml-2" />
                </p>
              </div>
            );
          })
        ) : (
          <h1>Chưa có thông tin !</h1>
        )}
      </div>
    </div>
  );
};

export default VoteResult;
