import { avatarIcon } from '../../assets/images/index';

interface props {
  title: string | undefined;
  content: string | undefined;
}

const AnswerCard: React.FC<props> = ({ title, content }) => {
  return (
    <div className="w-[300px] h-[126px] bg-primary-20 rounded-lg p-3 flex cursor-pointer">
      <div className="h-12 w-12 rounded-3xl bg-transparent mr-4">
        <img src={avatarIcon} alt="icon" className="w-full h-full" />
      </div>
      <div>
        <h2 className="text-white text-base font-bold">{title}</h2>
        <div className="text-primary-40 text-sm font-normal">{content}</div>
      </div>
    </div>
  );
};

export default AnswerCard;
