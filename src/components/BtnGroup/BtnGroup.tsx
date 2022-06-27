import Button from '../Button/Button';

const BtnGroup: React.FC = () => {
  return (
    <div className="flex bg-primary-30 rounded-lg p-[4px]">
      <Button title="Desciption" upcase={false} outline={false} group={true} active={true} />
      <Button title="Anwser" upcase={false} outline={false} group={true} active={false} />
      <Button title="Setting" upcase={false} outline={false} group={true} active={false} />
    </div>
  );
};

export default BtnGroup;
