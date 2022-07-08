import { arrayBuffer } from 'node:stream/consumers';
import { useEffect, useState } from 'react';
import { IoSave } from 'react-icons/io5';
import { useSetRecoilState } from 'recoil';
import { HomeUserState } from '../../../recoil/trending/HomeUserState';
import api from '../../../utils/request';
import { SelectionBox } from './SelectionBox';

export interface selectOption {
  id?: number;
  name: string;
  description: string;
}
interface criterias {
  id: number;
  description: string;
  created_by?: number;
  created_at?: string;
  updated_at?: string;
}
interface Props {
  pollOptionId: number;
}
interface users {
  id: number;
  name: string;
}
export const HomeVote = (props: Props) => {
  const { pollOptionId } = props;
  const setHomeState = useSetRecoilState(HomeUserState);
  const [selected, setSelected] = useState<selectOption[]>([]);
  const [listCriteria, setListCriteria] = useState<criterias[]>();

  const [allOption, setAllOption] = useState([]);
  const [userOptions, setUserOptions] = useState<users[]>([]);

  useEffect(() => {
    const getAllOptions = async () => {
      const options = await api.get(`/user_options/${pollOptionId}`);
      setAllOption(options.data.user_option);
    };
    getAllOptions();
  }, [pollOptionId]);
  useEffect(() => {
    const getUserOption = async () => {
      if (allOption) {
        const newListOption: users[] = [];
        allOption.map(async (option: any) => {
          const users = await api.get(`/users/${option.user_id}`);
          newListOption.push(users.data.user);
        });
        setUserOptions(newListOption);
      }
    };
    getUserOption();
  }, [allOption]);

  useEffect(() => {
    const getCriterias = async () => {
      const Criterias = await api.get('/criterias');
      setListCriteria(Criterias.data.criterias);
    };
    getCriterias();
  }, []);
  return (
    <section className="min-h-[472px] w-[366px]  relative">
      {/* vote Option */}
      {listCriteria &&
        listCriteria?.map((criteria: criterias, index: number) => (
          <div className="mb-[40px] w-[100%]" key={criteria.id}>
            <p className="text-[16px] font-bold">
              #{index + 1} {criteria.description}
            </p>
            <SelectionBox
              listoption={userOptions}
              selected={selected}
              setSelected={setSelected}
              indexCriteria={index}
            />
          </div>
        ))}
      {/* button Save */}
      <button
        className="w-[120px] h-[40px] hover:opacity-[0.8] text-[14px] font-bold bg-[rgba(255,255,255,0.1)] rounded-[8px] border-[1px] flex items-center justify-center absolute bottom-0 right-0"
        onClick={() => setHomeState('result')}
      >
        <IoSave className="text-[16px] mr-[9px]" /> save
      </button>
    </section>
  );
};
