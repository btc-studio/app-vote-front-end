import Avatar from '../Avatar/Avatar';
import { IoRocket } from 'react-icons/io5';

interface props {
  title?: string;
  children: JSX.Element | JSX.Element[];
  avatar?: boolean;
  icon?: JSX.Element;
}

const Modal: React.FC<props> = ({ title, children, avatar, icon }) => {
  return (
    <div>
      {avatar && <Avatar name="BTC Studio" size="big" css="mb-8" />}
      <div className="p-[34px] w-[434px] h-[648px] rounded-2xl bg-primary-20 relative">
        <div className="text-2xl font-bold text-white text-start flex ">
          {icon}
          {title && (
            <h1 className="flex text-start">
              <IoRocket className="mr-2 h-8" />
              {title}
            </h1>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
