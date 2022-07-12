import { useEffect, useState } from 'react';
import { IoSave } from 'react-icons/io5';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allCriteriaState, getCriteriasById } from '../../../recoil/trending/AllCriteria';
import { SelectedState, selectOption } from '../../../recoil/trending/Selected';
import api from '../../../utils/request';
import { SelectionBox } from './SelectionBox';

export interface criterias {
  id: number;
  description: string;
  created_by?: number;
  created_at?: string;
  updated_at?: string;
}
interface Props {
  // pollOptionId: number;
  pollId: number;
  criteriaIds: number[];
  // HandleSetHomeState: () => {}
}
interface users {
  id: number;
  name: string;
}
export const HomeVote = (props: Props) => {
  const { criteriaIds, pollId } = props;
  const [selected, setSelected] = useState<selectOption[]>([]);
  const [allOption, setAllOption] = useState([]);
  const [userOptions, setUserOptions] = useState<users[]>([]);

  const allCriteria = useRecoilValue(allCriteriaState);

  // useEffect(() => {
  //   const getAllOptions = async () => {
  //     const options = await api.get(`/user_options/${pollOptionId}`);
  //     setAllOption(options.data.user_option);
  //   };
  //   getAllOptions();
  // }, [pollOptionId]);
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

  const handleVoted = () => {
    console.log('voted');

    selected.map(async (item: selectOption) => {
      await api
        .post('/polls/vote', {
          poll_id: pollId,
          criteria_id: item.criteria_id,
          user_id: item.id,
        })
        .then((res) => {
          // setHomeState('result');
          console.log('post data', res);
        })
        .catch((err) => console.log('post fail', err));
    });
  };
  return (
    <section className="min-h-[472px] w-[366px]  relative">
      {/* vote Option */}
      {criteriaIds &&
        getCriteriasById(criteriaIds, allCriteria).map((criteria: criterias, index: number) => (
          <div className="mb-[40px] w-[100%]" key={criteria.id}>
            <p className="text-[16px] font-bold">
              #{index + 1} {criteria.description}
            </p>
            <SelectionBox
              criteriaId={criteria.id}
              listoption={userOptions}
              selected={selected}
              setSelected={setSelected}
              indexCriteria={index}
              lengthCriterial={criteriaIds.length}
              pollId={pollId}
            />
          </div>
        ))}
      {/* button Save */}
      <button
        disabled={selected.length < criteriaIds.length}
        className={`w-[120px] h-[40px] text-[14px] font-bold ${
          selected.length < criteriaIds.length ? 'bg-[#ccc]' : 'bg-[rgba(255,255,255,0.1)] hover:opacity-[0.8]'
        }  rounded-[8px] border-[1px] flex items-center justify-center absolute bottom-0 right-0 cursor-pointer`}
        onClick={handleVoted}
      >
        <IoSave className="text-[16px] mr-[9px]" /> save
      </button>
    </section>
  );
};
