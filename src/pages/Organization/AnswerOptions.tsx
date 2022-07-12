import AnswerCard from '../../components/AnswerCard/AnswerCard';
import { useRecoilValue } from 'recoil';
import { OptionsCall } from '../../recoil/create-options/OptionsState';

const AnswerOptions: React.FC = () => {
  const options = useRecoilValue(OptionsCall);
  return (
    <div className="grid grid-cols-3 gap-y-10 mt-[42px]">
      {options &&
        options.map((option) => {
          return <AnswerCard key={option.id} title={option.title} content={option.description} />;
        })}
    </div>
  );
};

export default AnswerOptions;
