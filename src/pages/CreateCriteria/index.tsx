import Modal from '../../components/Modal/Modal';
import { IoBookmark } from 'react-icons/io5';
import BtnGroup from '../../components/BtnGroup/BtnGroup';
import Button from '../../components/Button/Button';
import Create from './Create';
import List from './List';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { CriteriasCall, Criterias, getAllCriterias } from '../../recoil/create-criterias/CriteriaStates';

interface content {
  create: boolean;
  list: boolean;
}
const CreateCriteria: React.FC = () => {
  const [criteriasCall, setCriteriasCall] = useRecoilState(CriteriasCall);
  const [criterias, setCriterias] = useRecoilState(Criterias);

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
      <Modal title="Create criterias" avatar={true} icon={<IoBookmark className="mt-1 mr-2"></IoBookmark>}>
        {content.create ? <Create /> : <></>}
        {content.list ? <List data={criteriasCall} /> : <></>}
        {/* ------ Control ------ */}
        {criterias.length > 0 ? (
          <Button
            title="Delete all"
            outline={true}
            upcase={true}
            active={false}
            css="absolute bottom-20 right-10"
            handle={() => {
              setCriterias([]);
            }}
          />
        ) : (
          <></>
        )}

        <div className=" w-[364px] flex absolute bottom-0 py-3 justify-center border-t-[1px] border-primary-60 justify-center">
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
