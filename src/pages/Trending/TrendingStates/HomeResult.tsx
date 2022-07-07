import { IoShieldCheckmark } from 'react-icons/io5';
import people from '../../../assets/images/people.svg';
export const HomeResult = () => {
  return (
    <section className="min-h-[472px] w-[366px]">
      <div className="w-[373px] h-[101px] py-[15px] mb-[34px] rounded-[8px] bg-[rgba(255,255,255,0.3)] flex flex-col justify-center items-center">
        <div className="flex items-center justify-center mb-[8px]">
          <IoShieldCheckmark className="text-[42px] text-[#11DBC5] mr-[13px]" />
          <p className="text-[24px] font-[400]">Voted</p>
        </div>
        <p className="text-[14px] font-[400]">Your vote is saved on NEAR Blockchain</p>
      </div>
      <div>
        <p className="text-[16px] font-bold">#1 Lực sĩ - người gánh đồng đội trên lưng</p>
        <div className="flex items-center w-[100%] h-[40px] rounded-[8px] bg-[rgba(17,219,197,0.4)] px-[14px] py-[4px] mt-[10px]">
          <img src={people} className="w-[24px] h-[24px]" alt="" />
          <div>
            <p className="text-[14px] font-bold text-[#fff]">Nam Bùi</p>
            <p className="text-[8px]">Team lead dự án Full-Kaiten</p>
          </div>
        </div>
      </div>
    </section>
  );
};
