import Modal from '../../components/Modal/Modal';
import { IoPeople } from 'react-icons/io5';
import Button from '../../components/Button/Button';
import BtnGroup from '../../components/BtnGroup/BtnGroup';
import { useState } from 'react';
import Create from './Create';
import List from './List';
import { useRecoilValue } from 'recoil';
import { Option, OptionsCall } from '../../recoil/create-options/OptionsState';
import { UserInfo } from '../../recoil/users/UserInfo';
interface content {
  create: boolean;
  list: boolean;
}
const CreateOptions: React.FC = () => {
  const [content, setContent] = useState<content>({ create: true, list: false });
  const option = useRecoilValue(Option);
  const optionsCall = useRecoilValue(OptionsCall);
  const user = useRecoilValue(UserInfo);
  const handleCreateOption = () => {
    const createOption = async () => {
      try {
        await window.contract.create_poll_option({
          args: {
            created_by: user.id,
            title: option.title,
            description: option.description,
            user_ids: option.user_ids,
          },
          gas: '300000000000000', // attached GAS (optional)
          amount: '100000000000000000000000', // attached deposit in yoctoNEAR (optional)
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (option.description && option.title && option.user_ids && option.user_ids.length > 0) {
      createOption();
    } else alert('Please enter all!');
  };
  return (
    <div>
      <Modal title="Create options" avatar={true} icon={<IoPeople className="mt-1 mr-2"></IoPeople>}>
        {content.create ? <Create /> : <></>}
        {content.list ? <List data={optionsCall} /> : <></>}
        <Button
          group={false}
          outline={true}
          title="Create"
          upcase={true}
          active={false}
          css="absolute bottom-20 right-9 "
          handle={handleCreateOption}
        />
        <div className=" w-[364px] flex absolute bottom-0 py-3 border-t-[1px] border-primary-60 justify-center">
          <BtnGroup>
            <Button
              title="Create"
              outline={false}
              upcase={false}
              group={true}
              active={content.create}
              handle={() => {
                setContent({ create: true, list: false });
              }}
            />
            <Button
              title="List Options"
              outline={false}
              upcase={false}
              group={true}
              active={content.list}
              handle={() => {
                setContent({ create: false, list: true });
              }}
            />
          </BtnGroup>
        </div>
      </Modal>
    </div>
  );
};

export default CreateOptions;
