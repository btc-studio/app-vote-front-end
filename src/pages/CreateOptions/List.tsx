import { OptionModel } from '../../Model/Poll';
import { Item } from '../CreateCriteria/List';

interface propsList {
  data: OptionModel[];
}

const List: React.FC<propsList> = ({ data }) => {
  return (
    <div className="mt-4 max-h-[480px]	overflow-auto">
      {data &&
        data.map((item, index) => (
          <Item
            key={item.id}
            order={item.created_by}
            id={index + 1}
            description={item.description as string}
            css="h-20"
          />
        ))}
    </div>
  );
};
export default List;
