import Modal from '../../components/Modal/Modal';
import BtnGroup from '../../components/BtnGroup/BtnGroup';
import Button from '../../components/Button/Button';
import Description from './Description';
import Answer from './Answer';
import Setting from './Setting';
import { useRecoilState } from 'recoil';
import { SwitchContentCreatePoll, Poll } from '../../recoil/PollsState';
import { nextState } from '../../utils/CreatePollHandle';
const CreatePoll: React.FC = () => {
  const [switchContentState, setSwitchContentState] = useRecoilState(SwitchContentCreatePoll);
  const [poll] = useRecoilState(Poll);
  return (
    <div className="pb-6">
      <Modal avatar={true} title={switchContentState.description === true ? '' : poll.title}>
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
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CreatePoll;
