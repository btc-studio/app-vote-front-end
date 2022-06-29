import Button from '../Button/Button';

interface props {
  children: JSX.Element | JSX.Element[];
}

const BtnGroup: React.FC<props> = ({ children }) => {
  return <div className="flex bg-primary-30 rounded-lg p-[4px]">{children}</div>;
};

export default BtnGroup;
