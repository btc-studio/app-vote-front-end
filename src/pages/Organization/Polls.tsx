import { useRecoilValue } from 'recoil';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import { PollsCall } from '../../recoil/create-poll/PollsState';
import { yyyymmdd } from '../../utils/HandleDate';

interface props {
  setContent: Function;
  setPollId: Function;
}

const Polls: React.FC<props> = ({ setContent, setPollId }) => {
  const polls = useRecoilValue(PollsCall);

  return (
    <div className="flex w-full flex-wrap mt-4 justify-item-start">
      {polls &&
        polls.map((poll) => {
          let endDate: string;
          if ((new Date(poll.end_at as number).getFullYear() as number) > 1970)
            endDate = yyyymmdd(new Date(poll.end_at as number));
          // endDate = new Date(poll.end_at as number).toISOString().split('T')[0];
          else endDate = '';
          return (
            <AnswerCard
              css="mr-10 mb-6"
              key={poll.id}
              title={poll.title}
              content={poll.description}
              note={endDate}
              handle={() => {
                setContent({
                  orverview: false,
                  members: false,
                  polls: true,
                  answerOptions: false,
                  voteResult: true,
                });
                setPollId(poll.id);
              }}
            />
          );
        })}
    </div>
  );
};

export default Polls;
