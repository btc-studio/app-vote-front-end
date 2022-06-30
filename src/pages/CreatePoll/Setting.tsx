import { useState } from 'react';
import { IoTimeOutline, IoEyeOffOutline, IoGlobeOutline } from 'react-icons/io5';
import Switch from 'react-switch';

const Setting: React.FC = () => {
  const [check, setCheck] = useState<any>(true);
  return (
    <>
      <h2 className="mt-10 text-2xl font-bold text-white">Setting</h2>
      <div className="mt-5 w-full h-[194px] rounded-lg bg-primary-10 px-3 py-4">
        {/* Row-1 */}
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
                checked={check}
                onChange={() => {
                  setCheck(!check);
                }}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#11DBC5'}
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex justify-between ml-8 mt-3">
            <input type="time" className="bg-primary-20 text-sm flex-2 mr-3 h-10 py-2 px-3 rounded-lg" />
            <input type="date" className="bg-primary-20 text-sm flex-1 h-10 py-2 px-3 rounded-lg" />
          </div>
        </div>
        {/* Row-2 */}
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
                checked={check}
                onChange={() => {
                  setCheck(!check);
                }}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#11DBC5'}
                className="mt-1"
              />
            </div>
          </div>
        </div>
        {/* Row-3 */}
        <div className="mt-0 ">
          <div className="flex items-center w-full">
            <div className="p-[2px] rounded bg-blueN">
              <IoGlobeOutline className="text-blueN bg-white rounded-full " />
            </div>
            <div className="ml-2 flex justify-between flex-1 items-center py-2 border-t-[1px] border-primary-20">
              <span className="text-sm">Anonymous Poll</span>
              <select name="employee" className="bg-transparent rounded-xl text-sm">
                <option value={1}>Organization</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
