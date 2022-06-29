import BtnGroup from '../BtnGroup/BtnGroup';
import Button from '../Button/Button';
import { idCardOutline } from 'ionicons/icons';
import Avatar from '../Avatar/Avatar';

interface props {
  title: string;
  children: JSX.Element | JSX.Element[];
  avatar?: boolean;
  icon: JSX.Element;
}

const Modal: React.FC<props> = ({ title, children, avatar, icon }) => {
  return (
    <div className="mt-12">
      {avatar && <Avatar name="BTC Studio" />}
      <div className="p-[34px] w-[434px] h-[648px] rounded-2xl bg-primary-20 relative">
        <div className="text-2xl font-bold text-white text-center flex justify-center">
          {icon}
          <h1>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
