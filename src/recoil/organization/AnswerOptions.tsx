import AnswerCard from '../../components/AnswerCard/AnswerCard';
const AnswerOptions: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-y-10 mt-[42px]">
      <AnswerCard title="BTC Studio employees" content="Nhân viên  BTC Studio ngoại trừ BOD" />
      <AnswerCard title="Football players" content="Best football players" />
      <AnswerCard title="Football players" content="Best football players" />
      <AnswerCard title="Football players" content="Best football players" />
    </div>
  );
};

export default AnswerOptions;
