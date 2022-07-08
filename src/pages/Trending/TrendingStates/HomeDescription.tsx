import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allCriteriaState } from '../../../recoil/trending/AllCriteria';
import { PollInfoState } from '../../../recoil/trending/AllPoll';
import api from '../../../utils/request';

interface Props {
  pollDescription: string;
}
export interface Criteria {
  id: number;
  description: string;
}
export const HomeDescription = (props: Props) => {
  const { pollDescription } = props;
  const pollInfo: any = useRecoilValue(PollInfoState);
  const [allCriteria, setAllCriteria] = useRecoilState(allCriteriaState);

  useEffect(() => {
    if (pollInfo) {
      let newListCriteria: any[] = [];
      pollInfo.criteria_ids?.map(async (criteria: number) => {
        const criteriaItem = await api.get(`/criterias/${criteria}`);
        newListCriteria.push(criteriaItem.data.criteria);
      });
      setAllCriteria(newListCriteria);

      console.log(allCriteria);
    }
  }, [pollInfo]);
  return (
    <section className="w-[366px] min-h-[472px]">
      {pollInfo && (
        <>
          <div className="w-[363px] min-h-[241px] rounded-[32px] object-cover overflow-hidden my-[20px] bg-[#ccc]">
            {/* <img src="" alt="" /> */}
          </div>
          <div className="text-[14px]  font-[400] leading-[26px]">
            <p className="mb-[8px]">{pollDescription}</p>

            {allCriteria &&
              allCriteria.map((criteria: any, index) => (
                <p key={index}>
                  #{index + 1} {criteria.description}
                </p>
              ))}
          </div>
        </>
      )}
    </section>
  );
};
