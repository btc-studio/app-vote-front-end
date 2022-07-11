import { useEffect, useState } from 'react';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import { PollModel } from '../../Model/Poll';
import { getAllPolls } from '../../recoil/create-poll/PollsState';
const Polls: React.FC = () => {
  const [polls, setPolls] = useState<PollModel[]>([]);
  useEffect(() => {
    const getPolls = async () => {
      const allPolls = await getAllPolls();
      setPolls(allPolls);
    };
    getPolls();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-y-10 mt-[42px]">
      {polls.map((poll) => {
        return <AnswerCard key={poll.id} title={poll.title} content={poll.description} />;
      })}
    </div>
  );
};

export default Polls;
