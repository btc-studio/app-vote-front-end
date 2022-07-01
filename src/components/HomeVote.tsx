import { useState } from 'react';
import { IoSave } from 'react-icons/io5';
import { useSetRecoilState } from 'recoil';
import { HomeUserState } from '../recoil/HomeUserState';
import { SelectionBox } from './SelectionBox';

export interface selectOption {
  id?: number;
  name?: string;
  description?: string;
}
export const HomeVote = () => {
  const setHomeState = useSetRecoilState(HomeUserState);
  const [selected, setSelected] = useState<selectOption | undefined>();
  const [selected2, setSelected2] = useState<selectOption | undefined>();

  return (
    <section className="min-h-[472px] w-[366px]  relative">
      {/* vote Option */}
      <div className="mb-[40px] w-[100%]">
        <p className="text-[16px] font-bold">#1 Lực sĩ - người gánh đồng đội trên lưng</p>
        <SelectionBox
          listoption={[
            { id: 1, name: 'Nam Bui', description: 'Team lead dự án ...' },
            { id: 2, name: 'Duong HB', description: 'Team lead dự án ...' },
          ]}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <div className="mb-[40px] w-[100%]">
        <p className="text-[16px] font-bold">#1 Lực sĩ - người gánh đồng đội trên lưng</p>
        <SelectionBox
          listoption={[
            { id: 1, name: 'Nam Bui', description: 'Team lead dự án ...' },
            { id: 2, name: 'Duong HB', description: 'Team lead dự án ...' },
          ]}
          selected={selected2}
          setSelected={setSelected2}
        />
      </div>

      {/* button Save */}
      <button
        className="w-[120px] h-[40px] hover:opacity-[0.8] text-[14px] font-bold bg-[rgba(255,255,255,0.1)] rounded-[8px] border-[1px] flex items-center justify-center absolute bottom-0 right-0"
        onClick={() => setHomeState('result')}
      >
        <IoSave className="text-[16px] mr-[9px]" /> save
      </button>
    </section>
  );
};
