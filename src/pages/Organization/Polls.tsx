import { useRecoilValue } from 'recoil';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import { PollsCall } from '../../recoil/create-poll/PollsState';

interface props {
  setContent: Function;
  setPollId: Function;
}

const Polls: React.FC<props> = ({ setContent, setPollId }) => {
  const polls = useRecoilValue(PollsCall);

  return (
    <div className="flex w-full flex-wrap mt-4 justify-center">
      {polls &&
        polls.map((poll) => {
          return (
            <AnswerCard
              css="mr-10 mb-6"
              key={poll.id}
              title={poll.title}
              content={poll.description}
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
