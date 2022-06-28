import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import people from '../assets/images/people.svg';
interface Props {
  listoption: {
    id: number;
    name: string;
    description: string;
  }[];
}

export const SelectionBox = (props: Props) => {
  const { listoption } = props;
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="mt-[10px] w-[100%] h-[40px] rounded-[8px]">
      <div
        className=" relative w-[100%]  px-[20px]  py-[6px] text-[14px] font-[400] text-[rgba(255,255,255,0.4)]
      bg-[rgba(255,255,255,0.2)] cursor-pointer rounded-[8px] transition ease-in-out  m-0
      flex items-center justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        {/* <p>Select an item</p> */}
        <div className="flex items-center">
          <img src={people} className="w-[24px] h-[24px]" alt="" />
          <div>
            <p className="text-[14px] font-bold text-[#fff]">Nam Bùi</p>
            <p className="text-[8px]">Team lead dự án Full-Kaiten</p>
          </div>
        </div>
        <IoChevronDown className="text-[16px]" />
      </div>
      <div className={`absolute w-[100%] mt-[2px] bg-[#05293C] rounded-[8px]`}>
        {isActive && (
          <div className="">
            {listoption?.map((option) => (
              <div className="flex items-center px-[20px] py-[8px] cursor-pointer" key={option.id}>
                <img src={people} className="w-[24px] h-[24px]" alt="" />
                <div>
                  <p className="text-[14px] font-bold text-[#fff]">{option.name}</p>
                  <p className="text-[8px]">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
