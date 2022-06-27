import { beerIcon, sparklesIcon, fastFoodIcon, iceCreamIcon, pizzaIcon } from '../../assets/images';

interface itemProps {
  title: string;
  icon?: any;
  active: boolean;
}

const Item: React.FC<itemProps> = ({ title, icon, active }) => {
  return (
    <div
      className={`flex items-center justify-start text-white text-xl font-medium my-4 cursor-pointer leading-6
    ${active ? 'text-opacity-100' : 'text-opacity-50'}
    `}
    >
      <img src={icon} alt="icon" className="w-8 mr-3 " />
      <h3>{title}</h3>
    </div>
  );
};

const ListItem: React.FC = () => {
  return (
    <div className="border-2">
      <Item title="Trending" icon={sparklesIcon} active={true} />
      <Item title="Yours polls" icon={fastFoodIcon} active={false} />
      <Item title="Create a poll" icon={beerIcon} active={false} />
      <Item title="Organization" icon={iceCreamIcon} active={false} />
    </div>
  );
};

export default ListItem;
