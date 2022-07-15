import { IoShieldCheckmark } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';
// import people from '../../../assets/images/people.svg';
import { CriteriaModel } from '../../../Model/Poll';
import { allCriteriaState, getCriteriasById } from '../../../recoil/trending/AllCriteria';

interface Props {
  criteriaIds: number[];
  pollDescription: string;
}
export const HomeResult = (props: Props) => {
  const { pollDescription, criteriaIds } = props;
  const allCriteria = useRecoilValue(allCriteriaState);

  return (
    <section className="min-h-[472px] w-[366px]">
      <div className=" h-[100px] py-[15px] mb-[34px] rounded-[8px] bg-[rgba(255,255,255,0.3)] flex flex-col justify-center items-center">
        <div className="flex items-center justify-center mb-[8px]">
          <IoShieldCheckmark className="text-[42px] text-[#11DBC5] mr-[13px]" />
          <p className="text-[24px] font-[400]">Voted</p>
        </div>
        <p className="text-[14px] font-[400]">Your vote is saved on NEAR Blockchain</p>
      </div>
      <div>
        <div className="text-[14px]  font-[400] leading-[26px]">
          <p className="mb-[8px]">{pollDescription}</p>
          {criteriaIds &&
            getCriteriasById(criteriaIds, allCriteria).map((criteria: CriteriaModel, index) => (
              <p key={index}>
                # {index + 1} {criteria.description}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};
