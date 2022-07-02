import { IoImageOutline } from 'react-icons/io5';
import { Poll } from '../../recoil/create-poll/PollsState';
import { useRecoilState } from 'recoil';
import { useRef } from 'react';

const Description: React.FC = () => {
  const [poll, setPoll] = useRecoilState(Poll);
  const refInput = useRef<HTMLInputElement>(null);
  const refText = useRef<HTMLTextAreaElement>(null);

  return (
    <div>
      {/* Title input */}
      <input
        ref={refInput}
        placeholder="The vote title"
        className="h-10 w-full bg-primary-20 rounded-lg py-2 px-6 outline-none"
        onChange={() => {
          setPoll({ ...poll, title: refInput.current?.value ? refInput.current?.value : '' });
        }}
        value={poll.title}
      />
      {/* Upload file input */}
      <div className="w-full h-[94px] mt-11 border-[1px] border-primary-80 border-dashed rounded-2xl relative">
        <label className="h-full flex justify-center items-center flex-col opacity-80">
          <IoImageOutline className="w-10 h-10" />
          Add a cover
        </label>
        <input type="file" className="w-full h-full opacity-0 absolute top-0 outline-none" />
      </div>
      <textarea
        ref={refText}
        placeholder="Write a vote description"
        className="w-full bg-transparent mt-8 h-1/2 overflow-hidden outline-none"
        onChange={() => {
          setPoll({ ...poll, description: refText.current?.value ? refText.current?.value : '' });
        }}
        value={poll.description}
      />
    </div>
  );
};

export default Description;
