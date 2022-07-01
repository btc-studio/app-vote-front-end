import { IoAdd, IoPencil, IoTrash, IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Avatar from '../../components/Avatar/Avatar';
import { useRef, useState } from 'react';
import { Criterias, Options } from '../../recoil/PollsState';
import { useRecoilState } from 'recoil';

interface propsPollItem {
  title: string;
  order: number;
}

const PollItem: React.FC<propsPollItem> = ({ title, order }) => {
  const [criterias, setCriterias] = useRecoilState(Criterias);
  let refInput = useRef<HTMLInputElement>(null);

  return (
    <div className="flex justify-between mb-4 items-center pr-3">
      <label className={`text-base font-bold ${title ? 'pr-2' : ''}`}>{title !== '' ? `#${order}` : ''} </label>
      <input
        ref={refInput}
        className="bg-transparent w-full text-base font-bold mr-2"
        placeholder={`Poll ${order}`}
        value={title}
        onChange={() => {
          let newCriterias = [...criterias];
          newCriterias[order - 1] = refInput.current?.value;
          setCriterias(newCriterias);
        }}
      />
      <button className="w-[18px] h-[18px] flex justify-center items-center p-[2px] bg-primary-20 rounded text-primary-80">
        <IoTrash
          onClick={() => {
            let newCriterias = [...criterias];
            newCriterias.splice(order - 1, 1);
            setCriterias(newCriterias);
          }}
        />
      </button>
    </div>
  );
};

const Answer: React.FC = () => {
  const [hideOptions, setHideOptions] = useState<Boolean>(false);
  const [criterias, setCriterias] = useRecoilState(Criterias);
  const [options, setOptions] = useRecoilState(Options);
  const handleAddPoll = () => {
    setCriterias([...criterias, '']);
  };
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
            if (index != 0)
              return (
                <div key={index} onClick={() => handleSelectOption(index)}>
                  <Avatar name={item.title} size="small" note={item.description} css="px-2 hover:bg-primary-100 py-1" />
                </div>
              );
          })}
        </div>
      </div>

      {/* List tiêu chí */}
      <div className="mt-8 max-h-[280px] overflow-y-auto ">
        {criterias.map((item, index) => {
          return <PollItem title={item} key={index} order={index + 1} />;
        })}
      </div>
      <button
        className="w-full h-12 mt-4 flex justify-center items-center border-[1px] border-primary-80 border-dashed rounded-xl text-primary-80"
        onClick={handleAddPoll}
      >
        <IoAdd className="mr-4 h-6 w-6" />
        Add an poll
      </button>
    </>
  );
};

export default Answer;
