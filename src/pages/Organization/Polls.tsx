import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import { PollsCall } from '../../recoil/create-poll/PollsState';
const Polls: React.FC = () => {
  const polls = useRecoilValue(PollsCall);

  return (
    <div className="grid grid-cols-3 gap-y-10 mt-[42px]">
      {polls &&
        polls.map((poll) => {
          return <AnswerCard key={poll.id} title={poll.title} content={poll.description} />;
        })}
    </div>
  );
};

export default Polls;
