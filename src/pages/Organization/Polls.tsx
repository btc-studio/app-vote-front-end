import { useRecoilValue } from 'recoil';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import BtnGroup from '../../components/BtnGroup/BtnGroup';
import Button from '../../components/Button/Button';
import { PollsCall } from '../../recoil/create-poll/PollsState';
import { yyyymmdd } from '../../utils/HandleDate';

interface props {
  setContent: Function;
  setPollId: Function;
}

const Polls: React.FC<props> = ({ setContent, setPollId }) => {
  const polls = useRecoilValue(PollsCall);

  return (
    <div>
      <div className="flex w-full flex-wrap mt-4 justify-item-start">
        {polls &&
          polls.map((poll) => {
            let endDate: string;
            let expire: boolean = false;
            if ((new Date(poll.end_at as number).getFullYear() as number) > 1970) {
              endDate = yyyymmdd(new Date(poll.end_at as number));
              if (new Date().getTime() - (poll.end_at as number) < 0) {
                expire = false;
              } else {
                expire = true;
              }
            } else endDate = '';
            return (
              <AnswerCard
                css={`mr-10 mb-6 ${expire ? '' : 'border-2	 hover:shadow-md hover:shadow-white hover:bg-primary-30 '}`}
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
              >
                {expire ? (
                  <div className="absolute bottom-1 left-2 text-sm text-primary-30">Expried</div>
                ) : (
                  <div className="absolute bottom-1 left-2 text-sm text-primary-30">Available</div>
                )}
                <div className="absolute bottom-1 right-2 text-sm text-primary-30 italic">{endDate}</div>
              </AnswerCard>
            );
          })}
      </div>
      {/* {polls && (
        <Button
          group={true}
          title="Next >"
          active={true}
          upcase={false}
          outline={false}
          css="font-light text-md hover:bg-primary-20"
        />
      )} */}
    </div>
  );
};

export default Polls;
