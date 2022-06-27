import BtnGroup from '../BtnGroup/BtnGroup';
import Button from '../Button/Button';

interface props {
  title: string;
}

const Modal: React.FC<props> = ({ title }) => {
  return (
    <div className="p-[34px] w-[434px] h-[648px] rounded-2xl bg-primary-20 relative">
      <div className="">
        <h1 className="text-[24px] font-bold text-white text-center">{title}</h1>
        <div className="absolute flex border-t-[2px] border-primary-50 py-3 bottom-0">
          <BtnGroup />
          <Button title="Vote" upcase={true} outline={true} css={'ml-8'} active={false} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
