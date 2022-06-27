interface props {
  title: string;
  content: string;
}

const AnswerCard: React.FC<props> = ({ title, content }) => {
  return (
    <div className="w-[300px] h-[126px] bg-primary-30 rounded-lg p-3 flex mr-4">
      <div className="h-12 w-12"></div>
      <div>
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <div className="text-primary-40 text-sm font-normal">{content}</div>
      </div>
    </div>
  );
};

export default AnswerCard;
