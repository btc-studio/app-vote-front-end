import Avatar from '../../components/Avatar/Avatar';
import Item from '../../components/Item/Item';
import Header from '../../components/Layout/DefaultLayout/Header';
import { IoHomeOutline, IoPeopleOutline, IoBeerOutline, IoAlbumsOutline } from 'react-icons/io5';
import AnswerOptions from './AnswerOptions';
import VoteResult from './VoteResult';
import { useState } from 'react';
import Polls from './Polls';
import Members from './Members';
function Organization() {
  const [content, setContent] = useState<{
    orverview: boolean;
    members: boolean;
    polls: boolean;
    answerOptions: boolean;
    voteResult: boolean;
  }>({ orverview: false, members: true, polls: false, answerOptions: false, voteResult: false });
  const [pollId, setPollId] = useState<number | undefined>();
  return (
    <div className="flex flex-col pb-8">
      <Header />
      {/* Tag menu */}
      <div className=" px-56 border-b-[1px] border-primary-20 mt-20">
        <Avatar name="BTC Studio" size="big" />
        <div className="flex mt-4">
          {/* Members */}
          <div
            className="mr-8 relative"
            onClick={() => {
              setContent({
                orverview: false,
                members: true,
                polls: false,
                answerOptions: false,
                voteResult: false,
              });
            }}
          >
            <Item
              title="Members"
              icon={<IoPeopleOutline />}
              active={content.members}
              fontSize="md"
              line={content.members}
            />
          </div>
          {/* List polls ans result */}
          <div
            className="mr-8 relative"
            onClick={() => {
              setContent({
                orverview: false,
                members: false,
                polls: true,
                answerOptions: false,
                voteResult: false,
              });
            }}
          >
            <Item title="Polls" icon={<IoBeerOutline />} active={content.polls} fontSize="md" line={content.polls} />
          </div>
          {/* List answer options */}
          <div
            className="mr-8 relative"
            onClick={() => {
              setContent({
                orverview: false,
                members: false,
                polls: false,
                answerOptions: true,
                voteResult: false,
              });
            }}
          >
            <Item
              title="Answer Options"
              icon={<IoAlbumsOutline />}
              active={content.answerOptions}
              fontSize="md"
              line={content.answerOptions}
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="w-full px-56 mt-2">
        {content.answerOptions && <AnswerOptions />}
        {content.members && <Members />}
        {content.polls && !content.voteResult && <Polls setContent={setContent} setPollId={setPollId} />}
        {content.polls && content.voteResult && <VoteResult pollId={pollId as number} />}
      </div>
    </div>
  );
}

export default Organization;
