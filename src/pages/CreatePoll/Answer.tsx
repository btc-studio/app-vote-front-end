import { IoAdd, IoPencil, IoTrash, IoChevronDown } from 'react-icons/io5';
import Avatar from '../../components/Avatar/Avatar';
import { useState } from 'react';
import { PollList } from '../../recoil/CreatePollState';
import { useRecoilState } from 'recoil';

interface propsPollItem {
  title: string;
}

const PollItem: React.FC<propsPollItem> = ({ title }) => {
  return (
    <div className="flex justify-between mb-4 items-center">
      <input className="bg-transparent w-full text-base font-bold mr-2" value={title} onChange={() => {}} />
      <button className="w-[18px] h-[18px] flex justify-center items-center p-[2px] bg-primary-20 rounded text-primary-80">
        <IoTrash className="" />
      </button>
    </div>
  );
};

const Answer: React.FC = () => {
  const [hideOptions, setHideOptions] = useState<Boolean>(false);
  const [pollList, setPollList] = useRecoilState(PollList);
  const handleAddPoll = () => {
    let { listPoll, total } = pollList;
    if (total < 1) {
      console.log(listPoll);
    }
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
      {/* Options */}
      <div className="w-full h-10 bg-primary-20 rounded-xl px-3 relative flex cursor-pointer">
        <div
          className="flex items-center justify-between w-full"
          onClick={() => {
            setHideOptions(!hideOptions);
          }}
        >
          <Avatar name="BTC Studio employees" size="small" note="Nhân viên BTC Studio ngoại trừ BOD" />
          <IoChevronDown />
        </div>
        {/* Thay thế cho select option */}
        <div
          className="w-full absolute top-10 left-0 bg-greenL rounded-xl overflow-hidden"
          hidden={!(hideOptions && true)}
        >
          <Avatar
            name="BTC Studio employees"
            size="small"
            note="Nhân viên BTC Studio ngoại trừ BOD"
            css="px-2 hover:bg-primary-100 py-1"
          />
          <Avatar
            name="BTC Studio employees"
            size="small"
            note="Nhân viên BTC Studio ngoại trừ BOD"
            css="px-2 hover:bg-primary-100 py-1"
          />
          <Avatar
            name="BTC Studio employees"
            size="small"
            note="Nhân viên BTC Studio ngoại trừ BOD"
            css="px-2 hover:bg-primary-100 py-1"
          />
        </div>
      </div>
      {/* List tiêu chí */}
      <div className="mt-8"></div>

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
