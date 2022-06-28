interface itemProps {
  title: string;
  icon?: any;
  active: boolean;
  fontSize: boolean;
}

const Item: React.FC<itemProps> = ({ title, icon, active, fontSize }) => {
  return (
    <div
      className={`flex items-center justify-start text-white text-xl font-medium my-4 cursor-pointer leading-6
    ${active ? 'text-opacity-100' : 'text-opacity-50'}
    `}
    >
      <div className="mr-2">{icon}</div>
      <h3 className={`${fontSize ? '' : 'text-sm font-light'}`}>{title}</h3>
    </div>
  );
};

export default Item;
