import Header from './Header';
import Sidebar from './Sidebar';

interface Props {
  children: JSX.Element;
}
function DefaultLayout({ children }: Props) {
  return (
    <div className="flex items-center flex-col ">
      <Header />
      <div className="w-[1085px] mt-[40px] flex relavtive min-h-screen pb-8">
        <Sidebar />
        <div className=" flex justify-center ml-36">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
