import { useState } from 'react';
import { IoTimeOutline, IoEyeOffOutline, IoGlobeOutline } from 'react-icons/io5';
import Switch from 'react-switch';
import { Poll } from '../../recoil/create-poll/PollsState';
import { useRecoilState } from 'recoil';

const Setting: React.FC = () => {
  const [checkDate, setCheckDate] = useState<any>(true);
  const [checkAnonymous, setCheckAnonymous] = useState<any>(true);
  const [poll, setPoll] = useRecoilState(Poll);

  return (
    <>
      <h2 className="mt-10 text-2xl font-bold text-white">Setting</h2>
      <div className="mt-5 w-full h-[194px] rounded-lg bg-primary-10 px-3 py-4">
        {/* End Date */}
        <div>
          <div className="flex items-center w-full">
            <div className="p-[2px] rounded bg-greenL">
              <IoTimeOutline className="text-greenL bg-white rounded-full " />
            </div>
            <div className="ml-2 flex justify-between flex-1 items-center">
              <span className="text-sm">End Date</span>
              <Switch
                width={31}
                height={18}
                checked={checkDate}
                onChange={() => {
                  setCheckDate(!checkDate);
                  setPoll({ ...poll, end_at: '' });
                }}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#11DBC5'}
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex justify-between ml-8 mt-3">
            <input
              type="time"
              value={poll.end_at?.split(' ')[1]}
              className="bg-primary-20 text-sm flex-2 mr-3 h-10 py-2 px-3 rounded-lg"
              onChange={(e) => {
                // setPoll({ ...poll, ae});
              }}
            />
            <input
              type="date"
              value={poll.end_at}
              className="bg-primary-20 text-sm flex-1 h-10 py-2 px-3 rounded-lg"
              onChange={(e) => {
                setPoll({ ...poll, end_at: e.target.value });
              }}
            />
          </div>
        </div>
        {/* Anonymous */}
        <div className="mt-4 py-1">
          <div className="flex items-center w-full">
            <div className="p-[2px] rounded bg-orangeN">
              <IoEyeOffOutline className="text-orangeN bg-white rounded-full " />
            </div>
            <div className="ml-2 flex justify-between flex-1 items-center py-2 border-t-[1px] border-primary-20">
              <span className="text-sm">Anonymous Poll</span>
              <Switch
                width={31}
                height={18}
                checked={checkAnonymous}
                onChange={() => {
                  setCheckAnonymous(!checkAnonymous);
                }}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#11DBC5'}
                className="mt-1"
              />
            </div>
          </div>
        </div>
        {/* Who can vote */}
        <div className="mt-0 ">
          <div className="flex items-center w-full">
            <div className="p-[2px] rounded bg-blueN">
              <IoGlobeOutline className="text-blueN bg-white rounded-full " />
            </div>
            <div className="ml-2 flex justify-between flex-1 items-center py-2 border-t-[1px] border-primary-20">
              <span className="text-sm">Who can vote</span>
              <select name="employee" className="bg-transparent rounded-xl text-sm">
                <option value={1}>Organization</option>
                <option value={2}>Organization2</option>
                <option value={3}>Organization3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
