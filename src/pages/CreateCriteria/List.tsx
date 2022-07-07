import { IoBookmark } from 'react-icons/io5';
import { CriteriaModel } from '../../Model/Poll';
interface propsItem {
  id: number | undefined;
  order: number | undefined;
  description: string;
}

const Item: React.FC<propsItem> = ({ order, id, description }) => {
  return (
    <div className="w-full0 h-14 cursor-default	 bg-primary-30 rounded-xl pl-2 pr-4 py-2 relative mb-3">
      <IoBookmark className="w-6 h-6 text-greenM absolute -top-1 right-2" />
      <h1 className="font-medium text-xl text-white flex items-center">
        #{id}. {description}
      </h1>
      <h3 className="absolute bottom-1 right-2 text-sm text-primary-30">Create by {order}</h3>
    </div>
  );
};

interface propsList {
  data: CriteriaModel[] | [];
}
const List: React.FC<propsList> = ({ data }) => {
  return (
    <div className="mt-4 max-h-[480px]	overflow-auto">
      {data &&
        data.map((item) => <Item key={item.id} order={item.created_by} id={item.id} description={item.description} />)}
    </div>
  );
};

export default List;
