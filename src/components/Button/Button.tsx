interface props {
  title: string;
  icon?: any;
  upcase: boolean;
  active: boolean;
  outline: boolean;
  group?: boolean;
  css?: string;
  handle?: Function;
}

const Button: React.FC<props> = ({ title, icon, upcase, active, outline, group, css, handle }) => {
  return (
    <button
      className={`flex items-center font-semibold  text-center text-[14px] leading-[26px] rounded-lg 
        `}
      onClick={
        handle
          ? () => {
              handle();
            }
          : () => {}
      }
    >
      {icon && <img className="w-5 bg-transparent mr-2" src={icon} alt="icon-pizza" />}
      <span
        className={`
          rounded-lg text-white
          ${upcase ? 'uppercase' : ''}
          ${outline ? 'border-[1px] border-white' : ''}  text-white   	
          ${group ? 'px-2 py-[4px] text-opacity-50 hover:text-opacity-100' : 'px-5 py-[6px] hover:text-opacity-50'} 
          ${active ? 'bg-primary-30 text-opacity-100 text-white' : ''}
          ${css}
        `}
      >
        {title}
      </span>
    </button>
  );
};

export default Button;
