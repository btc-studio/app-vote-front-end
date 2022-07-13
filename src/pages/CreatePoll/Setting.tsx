import { useEffect, useState } from 'react';
import { IoTimeOutline, IoEyeOffOutline, IoGlobeOutline } from 'react-icons/io5';
import Switch from 'react-switch';
import { Poll } from '../../recoil/create-poll/PollsState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { convertDate, convertHours, convertDateSeconds, convertHoursSeconds } from '../../utils/HandleDate';
import { OptionsCall } from '../../recoil/create-options/OptionsState';

interface props {
  checkDate: boolean;
  setCheckDate: Function;
}

const Setting: React.FC<props> = ({ checkDate, setCheckDate }) => {
  const [checkAnonymous, setCheckAnonymous] = useState<any>(true);
  const [poll, setPoll] = useRecoilState(Poll);
  const options = useRecoilValue(OptionsCall);
  const [hours, setHours] = useState<string>('');
  const [date, setDate] = useState<string>('');
  useEffect(() => {
    setPoll({ ...poll, poll_option_id: options[0].id });
  }, [options]);
  return (
    <>
      <h2 className="mt-10 text-2xl font-bold text-white">Setting</h2>
      <div className="mt-5 w-full h-[160px] rounded-lg bg-primary-10 px-6 py-8">
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
                  setPoll({ ...poll, end_at: 0 });
                  setHours('');
                  setDate('');
                }}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#11DBC5'}
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <input
              type="time"
              value={hours}
              disabled={!checkDate}
              className="bg-primary-20 text-sm flex-2 mr-3 h-10 py-2 px-3 rounded-lg"
              onChange={(e) => {
                let hoursStr = e.target.value;
                let second: number = convertHoursSeconds(hoursStr);
                setHours(hoursStr);
                setPoll({ ...poll, end_at: second + (convertDateSeconds(date) | 0) });
              }}
            />
            <input
              type="date"
              disabled={!checkDate}
              value={date}
              className="bg-primary-20 text-sm flex-1 h-10 py-2 px-3 rounded-lg"
              onChange={(e) => {
                let dateStr = e.target.value;
                let second: number = convertDateSeconds(dateStr);
                setDate(dateStr);
                setPoll({ ...poll, end_at: second + (convertHoursSeconds(hours) | 0) });
              }}
            />
          </div>
        </div>
        {/* Anonymous */}
        {/* <div className="mt-4 py-1">
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
        </div> */}
        {/* Who can vote */}
        {/* <div className="mt-0 ">
          <div className="flex items-center w-full">
            <div className="p-[2px] rounded bg-blueN">
              <IoGlobeOutline className="text-blueN bg-white rounded-full " />
            </div>
            <div className="ml-2 flex justify-between flex-1 items-center py-2 border-t-[1px] border-primary-20">
              <span className="text-sm">Who can vote</span>
              <select name="employee" className="bg-transparent rounded-xl text-sm">
                <option value={1}>Organization</option>
                {/* <option value={2}>Organization2</option>
                <option value={3}>Organization3</option> 
              </select>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Setting;
