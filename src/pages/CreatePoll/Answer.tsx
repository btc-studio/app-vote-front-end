import { IoAdd, IoPencil, IoTrash, IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Avatar from '../../components/Avatar/Avatar';
import { useEffect, useState } from 'react';
import { Options } from '../../recoil/create-poll/PollsState';
import { useRecoilState } from 'recoil';
import { CriteriasCall, getAllCriterias } from '../../recoil/create-criterias/CriteriaStates';
interface propsItemCheck {
  id: number | undefined;
  description: string;
}
const ItemCheck: React.FC<propsItemCheck> = ({ id, description }) => {
  return (
    <div>
      <input type="checkbox" name={`criteria-${id}`} value={id} className="w-4 h-4 mr-2" />
      <label htmlFor={`criteria-${id}`} className="font-medium text-xl">
        {description}
      </label>
    </div>
  );
};

const Answer: React.FC = () => {
  const [hideOptions, setHideOptions] = useState<Boolean>(false);
  const [options, setOptions] = useRecoilState(Options);
  const [criteriasCall] = useRecoilState(CriteriasCall);

  const handleSelectOption = (index: number) => {
    let newOptions = [...options];
    let option = newOptions.splice(index, 1);
    newOptions.unshift(option[0]);
    setOptions(newOptions);
    setHideOptions(false);
  };
  return (
    <>
      <div className="mt-6 flex justify-between mb-1">
        <label>Choose Answer options</label>
        <div className="flex">
          <button className="w-[18px] h-[18px] flex justify-center items-center p-[2px] bg-primary-20 rounded mr-2 text-primary-80">
            <IoPencil className="" />
          </button>
          <button className="w-[18px] h-[18px] flex justify-center items-center p-[2px] bg-primary-20 rounded text-primary-80">
            <IoAdd />
          </button>
        </div>
      </div>

      {/* ====== Options ======= */}
      <div className="w-full h-10 bg-primary-20 rounded-xl px-3 relative flex cursor-pointer">
        <div
          className="flex items-center justify-between w-full"
          onClick={() => {
            setHideOptions(!hideOptions);
          }}
        >
          <Avatar name={options[0].title} size="small" note={options[0].description} />
          {hideOptions ? <IoChevronUp /> : <IoChevronDown />}
        </div>
        {/* Thay thế cho select option */}
        <div
          className="w-full absolute top-10 left-0 bg-greenL rounded-xl overflow-hidden"
          hidden={!(hideOptions && true)}
        >
          {options.map((item, index) => {
            if (index !== 0)
              return (
                <div key={index} onClick={() => handleSelectOption(index)}>
                  <Avatar name={item.title} size="small" note={item.description} css="px-2 hover:bg-primary-100 py-1" />
                </div>
              );
            else return null;
          })}
        </div>
      </div>

      {/* List tiêu chí */}
      <div className="mt-10 flex justify-between mb-1 flex-col">
        <div className="flex justify-between">
          <label>Choose Answer options</label>
          <button className="w-[18px] h-[18px] flex justify-center items-center p-[2px] bg-primary-20 rounded text-primary-80">
            <IoAdd />
          </button>
        </div>
        <div>
          {criteriasCall.length > 0 ? (
            criteriasCall.map((item) => {
              return <ItemCheck key={item.id} id={item.id} description={item.description} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Answer;
