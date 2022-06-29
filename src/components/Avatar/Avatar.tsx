interface props {
  name: string;
}

const Avatar: React.FC<props> = ({ name }) => {
  return (
    <div className="flex mb-8 items-center">
      <div className="w-[75px] h-[75px] bg-primary-50 rounded-full"></div>
      <h1 className="text-white font-bold text-2xl ml-6">{name}</h1>
    </div>
  );
};

export default Avatar;
