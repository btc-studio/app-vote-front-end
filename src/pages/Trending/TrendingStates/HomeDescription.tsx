import { useRecoilState, useRecoilValue } from 'recoil';
import { descriptionImage } from '../../../assets/images';

import { allCriteriaState, getCriteriasById } from '../../../recoil/trending/AllCriteria';
import { PollInfoState } from '../../../recoil/trending/AllPoll';

interface Props {
  pollDescription: string;
  criteriaIds: number[];
}
export interface Criteria {
  id: number;
  description: string;
}
export const HomeDescription = (props: Props) => {
  const { pollDescription, criteriaIds } = props;
  const pollInfos: any = useRecoilValue(PollInfoState);
  const [allCriteria, setAllCriteria] = useRecoilState(allCriteriaState);

  return (
    <section className="w-[366px] min-h-[472px]">
      {pollInfos && (
        <>
          <div className="w-[363px] min-h-[241px] rounded-[32px] object-cover overflow-hidden my-[20px] bg-[#ccc]">
            <img src={descriptionImage} alt="" />
          </div>
          <div className="text-[14px]  font-[400] leading-[26px]">
            <p className="mb-[8px]">{pollDescription}</p>

            {criteriaIds &&
              getCriteriasById(criteriaIds, allCriteria).map((criteria: any, index) => (
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
