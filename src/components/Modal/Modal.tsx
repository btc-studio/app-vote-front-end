import BtnGroup from '../BtnGroup/BtnGroup';
import Button from '../Button/Button';
import { idCardOutline } from 'ionicons/icons';

interface props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Modal: React.FC<props> = ({ title, children }) => {
  return (
    <div className="p-[34px] w-[434px] h-[648px] rounded-2xl bg-primary-20 relative">
      <div className="">
        <h1 className="text-[24px] font-bold text-white text-center">{title}</h1>
        {/* <div>{children}</div> */}
        <div className="absolute flex border-t-[2px] border-primary-50 py-3 bottom-0">
          {children}
          {/* <BtnGroup /> */}
          <Button title="Vote" upcase={true} outline={true} css={'ml-8'} active={false} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
