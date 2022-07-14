import { useEffect, useState } from 'react';
import { IoSave } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';
import { allCriteriaState, getCriteriasById } from '../../../recoil/trending/AllCriteria';
// import { listPolls } from '../../../recoil/trending/AllPoll';
import { allUserState } from '../../../recoil/trending/AllUser';
import { selectOption } from '../../../recoil/trending/Selected';
// import api from '../../../utils/request';
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
  optionId: number;
  setHomeState: React.Dispatch<React.SetStateAction<string>>;
  setIsVoted: React.Dispatch<React.SetStateAction<number[]>>;
  selected: selectOption[];
  setSelected: React.Dispatch<React.SetStateAction<selectOption[]>>;
}
interface users {
  id: number;
  name: string;
}
export const HomeVote = (props: Props) => {
  const { criteriaIds, pollId, optionId, setHomeState, setIsVoted, selected, setSelected } = props;
  // const [selected, setSelected] = useState<selectOption[]>([]);
  const [userOptions, setUserOptions] = useState<users[]>([]);
  const allCriteria = useRecoilValue(allCriteriaState);
  const [arrUserId, setArrUserId] = useState<number[]>([]);
  const allUser = useRecoilValue(allUserState);

  useEffect(() => {
    const getOptionById = async () => {
      const OptionById = await window.contract.get_poll_option_by_id({ poll_option_id: optionId });
      setArrUserId(OptionById.user_ids);
    };
    getOptionById();
  }, [optionId]);

  useEffect(() => {
    const handleGetOptionById = (arrUserId: number[], allUser: any[]) => {
      let newArr = allUser.filter((User) => {
        return arrUserId.indexOf(User.id as number) >= 0;
      });
      return setUserOptions(newArr);
    };
    handleGetOptionById(arrUserId, allUser);
  }, [arrUserId, allUser]);

  const handleVoted = async () => {
    await selected.map((item: selectOption) => {
      window.contract.vote({
        poll_id: pollId,
        criteria_id: item.criteria_id,
        user_id: item.id,
      });
    });
    setHomeState('result');
    setIsVoted((prev) => {
      const newArrVoted = [...prev, pollId];
      const jsonVoted = JSON.stringify(newArrVoted);
      localStorage.setItem('IdPollIsVoted', jsonVoted);

      return newArrVoted;
    });
    // setSelected((prev: any) => {
    //   const newArrSelected = [...prev, selected];
    //   const jsonSelected = JSON.stringify(newArrSelected);
    //   localStorage.setItem('pollSelected', jsonSelected);
    //   return newArrSelected;
    // });
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
