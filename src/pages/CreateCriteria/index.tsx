import Modal from '../../components/Modal/Modal';
import { IoPaperPlane, IoRefresh } from 'react-icons/io5';
import BtnGroup from '../../components/BtnGroup/BtnGroup';
import Button from '../../components/Button/Button';
import Create from './Create';
import List from './List';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { CriteriasCall, Criterias, getAllCriterias } from '../../recoil/create-criterias/CriteriaStates';
import { useRecoilValue } from 'recoil';
import { UserInfo } from '../../recoil/users/UserInfo';
interface content {
  create: boolean;
  list: boolean;
}
const CreateCriteria: React.FC = () => {
  const [criteriasCall, setCriteriasCall] = useRecoilState(CriteriasCall);
  const [criterias, setCriterias] = useRecoilState(Criterias);
  const userInfo = useRecoilValue(UserInfo);

  const [content, setContent] = useState<content>({ create: true, list: false });
  useEffect(() => {
    const getCriterias = async () => {
      const allCriterias = await getAllCriterias();

      setCriteriasCall(allCriterias);
    };
    getCriterias();
  }, []);
  return (
    <div>
      <Modal title="Create criterias" avatar={true} icon={<IoPaperPlane className="mt-1 mr-2"></IoPaperPlane>}>
        {criterias.length > 0 && content.create ? (
          <button
            className="w-[18px] h-[18px] flex justify-center items-center p-[2px] bg-primary-30 rounded text-white mr-2 absolute right-8 top-11"
            title="Remove all"
            onClick={() => setCriterias([])}
          >
            <IoRefresh className="" />
          </button>
        ) : (
          <></>
        )}
        {content.create ? <Create userId={userInfo.id as number} /> : <></>}
        {content.list ? <List data={criteriasCall} /> : <></>}
        {/* ------ Control ------ */}
        {criterias.length > 0 && content.create ? (
          <Button
            title="Create all"
            outline={true}
            upcase={true}
            active={false}
            css="absolute bottom-20 right-10"
            handle={async () => {
              try {
                const newList = criterias.filter((item) => {
                  return item.description !== '';
                });
                const newListString = newList.map((item) => item.description);
                if (newList.length > 0) {
                  console.log(newListString);
                  await window.contract.create_criteria({
                    args: {
                      created_by: userInfo.id,
                      descriptions: newListString,
                    },
                    gas: '300000000000000', // attached GAS (optional)
                    amount: '100000000000000000000000', // attached deposit in yoctoNEAR (optional)
                  });
                }
              } catch (error) {
                alert(error);
              }
            }}
          />
        ) : (
          <></>
        )}

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
              title="List Criterias"
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

export default CreateCriteria;
