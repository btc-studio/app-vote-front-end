import Modal from '../../components/Modal/Modal';
import BtnGroup from '../../components/BtnGroup/BtnGroup';
import Button from '../../components/Button/Button';
import Description from './Description';
import Answer from './Answer';
import Setting from './Setting';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SwitchContentCreatePoll, Poll } from '../../recoil/create-poll/PollsState';
import { nextState } from '../../utils/CreatePollHandle';
import { IoRocket } from 'react-icons/io5';
import { UserInfo } from '../../recoil/UserInfo';

const CreatePoll: React.FC = () => {
  const [switchContentState, setSwitchContentState] = useRecoilState(SwitchContentCreatePoll);
  const userInfo = useRecoilValue(UserInfo);
  const [poll] = useRecoilState(Poll);

  const handlePostPoll = async () => {
    await window.contract.create_poll({
      args: {
        criteria_ids: poll.criteria_ids,
        created_by: 1,
        title: poll.title,
        description: poll.description,
        start_at: new Date().getTime(),
        end_at: poll.end_at,
      },
      gas: '300000000000000', // attached GAS (optional)
      amount: '100000000000000000000000', // attached deposit in yoctoNEAR (optional)
    });
  };
  return (
    <div>
      <Modal
        avatar={true}
        title={switchContentState.description === true ? '' : poll.title}
        icon={<IoRocket className="mt-1 mr-2"></IoRocket>}
      >
        {switchContentState.description ? <Description /> : <></>}
        {switchContentState.answer ? <Answer /> : <></>}
        {switchContentState.setting ? <Setting /> : <></>}
        <div className=" w-[364px] flex absolute bottom-0 py-3 justify-between border-t-[1px] border-primary-60">
          <BtnGroup>
            <Button
              title="Description"
              active={switchContentState.description}
              outline={false}
              upcase={false}
              group={true}
              handle={() => {
                setSwitchContentState({
                  description: true,
                  answer: false,
                  setting: false,
                });
              }}
            />
            <Button
              title="Answer"
              active={switchContentState.answer}
              outline={false}
              upcase={false}
              group={true}
              handle={() => {
                setSwitchContentState({
                  description: false,
                  answer: true,
                  setting: false,
                });
              }}
            />
            <Button
              title="Setting"
              active={switchContentState.setting}
              outline={false}
              upcase={false}
              group={true}
              handle={() => {
                setSwitchContentState({
                  description: false,
                  answer: false,
                  setting: true,
                });
              }}
            />
          </BtnGroup>
          <Button
            title={switchContentState.setting ? 'Post' : 'Next'}
            active={false}
            outline={true}
            upcase={true}
            handle={() => {
              const newState = nextState(switchContentState);
              setSwitchContentState(newState);
              if (switchContentState.setting) {
                handlePostPoll();
              }
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CreatePoll;
