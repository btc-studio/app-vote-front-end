import { IoImageOutline, IoClose } from 'react-icons/io5';
import { Poll } from '../../recoil/create-poll/PollsState';
import { useRecoilState } from 'recoil';
import { useRef, useState } from 'react';
import { create, Options } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001/api/v0' as Options);

const Description: React.FC = () => {
  const [poll, setPoll] = useRecoilState(Poll);
  const refInput = useRef<HTMLInputElement>(null);
  const refText = useRef<HTMLTextAreaElement>(null);
  // Lưu link ảnh
  async function handleChangeImg(e: any) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setPoll({ ...poll, img_url: url });
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }
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
      <div
        className={`w-full h-[94px] mt-11 border-[1px] border-primary-80 border-dashed rounded-2xl relative ${
          poll.img_url ? 'invisible' : ''
        }`}
      >
        <label className="h-full flex justify-center items-center flex-col opacity-80">
          <IoImageOutline className="w-10 h-10" />
          Add a cover
        </label>
        <input
          type="file"
          className="w-full h-full opacity-0 absolute top-0 outline-none z-100 cursor-pointer"
          onChange={handleChangeImg}
        />
      </div>
      {poll.img_url ? (
        <div className="mt-[60px] absolute top-14  rounded-xl overflow-hidden bg-primary">
          <img
            src={poll.img_url}
            title="Description image"
            className="w-[366px] h-[280px] z-100 object-coverobject-fill"
          />
          <div className="absolute text-white top-1 right-1 z-100 p-1 bg-[#333] rounded-3xl cursor-pointer hover:bg-[#94acb7]">
            <IoClose
              className=""
              onClick={() => {
                setPoll({ ...poll, img_url: null });
              }}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      <textarea
        ref={refText}
        placeholder="Write a vote description"
        className="w-full bg-transparent mt-52 h-1/2 overflow-hidden outline-none"
        onChange={() => {
          setPoll({ ...poll, description: refText.current?.value ? refText.current?.value : '' });
        }}
        value={poll.description}
      />
    </div>
  );
};

export default Description;
