import { ListCriterias } from '../../../Data_Dummy';
export const HomeDescription = () => {
  return (
    <section className="w-[366px] min-h-[472px]">
      <div className="w-[363px] min-h-[241px] rounded-[32px] object-cover overflow-hidden my-[20px] bg-[#ccc]">
        {/* <img src="" alt="" /> */}
      </div>
      <div className="text-[14px]  font-[400] leading-[26px]">
        <p className="mb-[8px]">Đến hẹn lại lên ,BTC Studio đi tìm chủ nhân cho giải thưởng #MVP062022</p>
        <p className="mb-[8px]">Hãy cùng Team Accounting khám phá các tiêu chí bình chọn tháng này nhé ^^</p>
        {ListCriterias?.map((criterial, index) => (
          <p key={criterial.id}>
            #{index + 1} {criterial.description}
          </p>
        ))}
      </div>
    </section>
  );
};
